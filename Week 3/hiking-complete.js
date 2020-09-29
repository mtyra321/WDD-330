        //create an array of hikes


        function popList() {
            const hikeList = [{
                name: 'Bechler Falls',
                imgSrc: 'bechler falls.jpg',
                imgAlt: 'Image of Bechler Falls',
                distance: '3 miles',
                difficulty: 'Easy',
                description: 'Beautiful short hike along the Bechler river to Bechler Falls',
                directions: 'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
            }, {
                name: 'Teton Canyon',
                imgSrc: 'teton canyon.jpg',
                imgAlt: 'Image of Teton Canyon',
                distance: '5 miles',
                difficulty: 'Moderate',
                description: 'Beautiful short hike up Teton Canyon',
                directions: 'Take Highway 33 to Driggs. Turn right into the town and continue through. Follow that road for a few miles then turn right up Teton Canyon. Drive to the end of the road. There is a parking area at the trailhead.'
            }, {
                name: 'Dunanda Falls',
                imgSrc: 'dunanda falls.jpg',
                imgAlt: 'Image of Dunanda Falls',
                distance: '12 miles',
                difficulty: 'Moderate',
                description: 'Beautiful hike through Bechler Meadows to Denanda Falls',
                directions: 'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for several miles then turn left again at the sign for the Bechler Meadows ranger station. There is a parking area at the trailhead.'
            }];
            var list = document.getElementById("hikes");


            for (let index = 0; index < hikeList.length; index++) {
                const element = hikeList[index];

                let image = document.createElement("img");
                image.src = element.imgSrc;
                image.alt = element.imgAlt;

                let name = document.createElement("h2");
                name.innerText = element.name;
                let distanceDiv = document.createElement("div");
                distanceDiv = makeDiv("Distance", element.distance);
                let difficultyDiv = document.createElement("div");
                difficultyDiv = makeDiv("Difficulty", element.difficulty);
                let descriptionDiv = document.createElement("div");
                descriptionDiv = makeDiv("Description", element.description);
                let directionsDiv = document.createElement("div");
                directionsDiv = makeDiv("How to get there", element.directions);

                var li = document.createElement("li");
                // //var a creates an A element
                // var a = document.createElement("a");
                // //set a to a href and give it the site link
                // a.setAttribute('href', element);
                // //make a display the name
                // a.innerHTML = name;
                // console.log(element);
                li.appendChild(image);
                li.appendChild(name);
                li.appendChild(distanceDiv);
                li.appendChild(difficultyDiv);
                li.appendChild(descriptionDiv);
                li.appendChild(directionsDiv);


                console.log(li);
                list.appendChild(li);

            }

            function makeDiv(labelData, pData) {
                let div = document.createElement("div");
                let label = document.createElement("h3");
                let data = document.createElement("p");
                console.log(labelData);
                label.innerText = labelData;
                data.innerText = pData;
                div.appendChild(label);
                div.appendChild(data);
                return div;

            }

        }