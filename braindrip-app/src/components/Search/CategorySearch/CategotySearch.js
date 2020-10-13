import React, { useState } from 'react';
import moment from 'moment';
import { Button, Slider, Checkbox } from 'antd';
import ViewWithPopup from '#root/components/UI/ViewWithPopup/ViewWithPopup';
import InputIncDec from '#root/components/UI/InputIncDec/InputIncDec';
import DateRangePickerBox from '#root/components/UI/DatePicker/ReactDates';
import { setStateToUrl, getStateFromUrl } from '../url_handler';
import {
  priceInit,
  calenderItem,
  getDifficulties,
  getPropertyType,
} from '../SearchParams';
import CategroySearchWrapper, {
  RoomGuestWrapper,
  ItemWrapper,
  ActionWrapper,
} from './CategorySearch.style';

const CategotySearch = ({ history, location }) => {
  const searchParams = getStateFromUrl(location);
  const state = {
    difficulties: searchParams.difficulties || [],
    property: searchParams.property || [],
    date_range: searchParams.date_range || {
      setStartDate: null,
      setEndDate: null,
    },
    price: searchParams.price || {
      min: 0,
      max: 100,
      defaultMin: 0,
      defaultMax: 100,
    },
    location: searchParams.location || {
      lat: null,
      lng: null,
    },
    room: parseInt(searchParams.room) || 0,
    guest: parseInt(searchParams.guest) || 0,
  };
  const { difficulties, property, date_range, price, room, guest } = state;
  const [countRoom, setRoom] = useState(room);
  const [countGuest, setGuest] = useState(guest);

  const onChange = (value, type) => {
    const query = {
      ...state,
      [type]: value,
    };
    const search = setStateToUrl(query);
    history.push({
      pathname: '/learning-paths',
      search: search,
    });
  };

  const handleRoomGuestApply = () => {
    const query = {
      ...state,
      room: countRoom,
      guest: countGuest,
    };
    const search = setStateToUrl(query);
    history.push({
      pathname: '/learning-paths',
      search: search,
    });
  };

  const handleRoomGuestCancel = () => {
    setRoom(0);
    setGuest(0);
    const query = {
      ...state,
      room: 0,
      guest: 0,
    };
    const search = setStateToUrl(query);
    history.push({
      pathname: '/learning-paths',
      search: search,
    });
  };

  const onSearchReset = () => {
    setRoom(0);
    setGuest(0);
    const search = setStateToUrl({ reset: '' });
    history.push({
      pathname: '/learning-paths',
      search: search,
    });
  };

  return (
    <CategroySearchWrapper>
      <ViewWithPopup
        className={difficulties.length ? 'activated' : ''}
        key={getDifficulties.id}
        noView={true}
        view={
          <Button type="default">
            {getDifficulties.name}
            {difficulties.length > 0 && `: ${difficulties.length}`}
          </Button>
        }
        popup={
          <Checkbox.Group
            options={getDifficulties.options}
            defaultValue={difficulties}
            onChange={(value) => onChange(value, 'difficulties')}
          />
        }
      />
      <div className="view_with__popup">
        <div className="popup_handler">
          <Button type="default" onClick={onSearchReset}>
            Reset
          </Button>
        </div>
      </div>
    </CategroySearchWrapper>
  );
};

export default CategotySearch;
