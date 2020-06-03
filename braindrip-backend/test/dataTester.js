import db from '#root/db';

const { User, LearningPath, LearningPathResource, Favorites } = db;

(async () => {
    try {
        let newUsers = await User.findAll({
            // if we don't have subquery here, it will continue to 
            // recurse on the queries. Weird.
            subQuery: false,
            limit: 3,
            include: [
                {
                    // all:true,
                    nested: true,
                    model: Favorites,
                    as: 'favorites',
                    // required true will make it so that it will grab the first person
                    // with at least 1 record
                    required: true,
                    include: [
                        {
                            model: LearningPath,
                            as: 'learningPath'
                        }
                    ]
                }, {
                    model: LearningPath,
                    as: 'learningPaths',
                    include: [
                        {
                            model: LearningPathResource,
                            as: 'learningPathResources'
                        }
                    ]
                }
            ], 
            // the following two will flatten and spit out only a json
            nest: true,
            // raw: true
        });
        console.log(newUsers.map(u => u.get({plain: true})))
        // newUsers = newUsers.map(u => u.get());

        // console.log(newUsers)
        // console.log(newUsers[0].learningPaths[0].get())
    } catch(err) {
        console.log("Error while getting user : ", err);
    }
})()