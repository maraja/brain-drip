<<<<<<< HEAD
import db from '#root/db';

const { User, LearningPath, LearningPathResource, Favorites } = db;
=======
import db, { User, LearningPath, LearningPathResource, Favorites } from '#root/db';
>>>>>>> 461ae08e90c0639bf52d9c202d1f2a55301920af

(async () => {
    try {
        let newUsers = await User.findAll({
            // if we don't have subquery here, it will continue to 
            // recurse on the queries. Weird.
            subQuery: false,
<<<<<<< HEAD
            limit: 3,
=======
            limit: 1,
>>>>>>> 461ae08e90c0639bf52d9c202d1f2a55301920af
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