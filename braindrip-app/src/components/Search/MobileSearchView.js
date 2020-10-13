import React, { useState } from 'react';
import moment from 'moment';
import { Slider, Button, Drawer, Checkbox } from 'antd';
import Heading from '#root/components/UI/Heading/Heading';
import DateRangePicker from '#root/components/UI/DatePicker/ReactDates';
import InputIncDec from '#root/components/UI/InputIncDec/InputIncDec';
import { setStateToUrl, getStateFromUrl } from './url_handler';
import { IoIosArrowDown } from 'react-icons/io';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import {
  priceInit,
  calenderItem,
  getDifficulties,
  getPropertyType,
} from './SearchParams';
import {
  FilterArea,
  FilterElementsWrapper,
  ButtonGroup,
  RoomGuestWrapper,
  ItemWrapper,
} from './MobileSearchView.style';

const FilterDrawer = ({ history, location }) => {
  const searchParams = getStateFromUrl(location);
  const [toggle, setToggle] = useState(false);
  const [difficulties, setDifficulties] = useState(searchParams.difficulties || []);
  const [propertyType, setPropertyType] = useState(searchParams.property || []);
  const [searchDate, setSearchDate] = useState(
    searchParams.date_range || {
      setStartDate: null,
      setEndDate: null,
    }
  );
  const [price, setPrice] = useState(
    searchParams.price || {
      min: 0,
      max: 100,
      defaultMin: 0,
      defaultMax: 100,
    }
  );
  const roomAndGuest = {
    room: searchParams && searchParams.room ? parseInt(searchParams.room) : 0,
    guest:
      searchParams && searchParams.guest ? parseInt(searchParams.guest) : 0,
  };
  const [roomGuest, setRoomGuest] = useState(
    roomAndGuest || {
      room: 0,
      guest: 0,
    }
  );
  const handleIncrement = (type) => {
    console.log('clicked handleIncrement');
    setRoomGuest({
      ...roomGuest,
      [type]: roomGuest[type] + 1,
    });
  };
  const handleDecrement = (type) => {
    console.log('clicked handleDecrement');
    if (roomGuest[type] <= 0) {
      return false;
    }
    setRoomGuest({
      ...roomGuest,
      [type]: roomGuest[type] - 1,
    });
  };
  const handleIncDecOnChange = (e, type) => {
    let currentValue = e.target.value;
    setRoomGuest({
      ...roomGuest,
      [type]: currentValue,
    });
  };
  const handleToggleDrawer = () => {
    setToggle(!toggle);
  };
  const onChangeAmenity = (checkedAmenityValue) => {
    setDifficulties(checkedAmenityValue);
  };
  const onChangeProperty = (checkedPropertValue) => {
    setPropertyType(checkedPropertValue);
  };
  const handlePriceChange = (setValue) => {
    const maxValue = setValue ? setValue[1] : price.defaultMin;
    const minValue = setValue ? setValue[0] : price.defaultMax;
    setPrice({
      min: minValue,
      max: maxValue,
      defaultMin: price.defaultMin,
      defaultMax: price.defaultMax,
    });
  };
  const updateSearchDataFunc = (setDateValue) => {
    setSearchDate({
      setStartDate: setDateValue.setStartDate,
      setEndDate: setDateValue.setEndDate,
    });
  };
  const handleApplyFilter = () => {
    const search = setStateToUrl({
      difficulties: difficulties,
      property: propertyType,
      price: [price.min, price.max],
      date_range: searchDate,
      ...roomGuest,
    });
    history.push({
      pathname: '/learning-paths',
      search: search,
    });
    setToggle(false);
  };
  const handleCloseDrawer = () => {
    setStateToUrl(null);
    setDifficulties([]);
    setPropertyType([]);
    setSearchDate({
      setStartDate: null,
      setEndDate: null,
    });
    setPrice({
      min: 0,
      max: 100,
      defaultMin: 0,
      defaultMax: 100,
    });
    setRoomGuest({
      room: 0,
      guest: 0,
    });
    setToggle(false);
  };

  return (
    <FilterArea>
      <Button className={toggle ? 'active' : ''} onClick={handleToggleDrawer}>
        More filters
      </Button>
      <Drawer
        className="filter_drawer"
        height="100vh"
        placement="bottom"
        closable={false}
        maskClosable={false}
        onClose={handleCloseDrawer}
        visible={toggle}
        maskStyle={{ backgroundColor: 'transparent' }}
      >
        <FilterElementsWrapper>
          <Accordion allowZeroExpanded={true}>

            {/* Start difficulties filter element */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <Heading as="h4" content="Difficulties" />
                  <IoIosArrowDown />
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Checkbox.Group
                  options={getDifficulties.options}
                  value={difficulties}
                  onChange={onChangeAmenity}
                />
              </AccordionItemPanel>
            </AccordionItem>
            {/* End of difficulties filter element */}

          </Accordion>

          <ButtonGroup>
            <Button onClick={handleCloseDrawer}>Cancel Filter</Button>
            <Button type="primary" onClick={handleApplyFilter}>
              Apply Filter
            </Button>
          </ButtonGroup>
        </FilterElementsWrapper>
      </Drawer>
    </FilterArea>
  );
};

export default FilterDrawer;
