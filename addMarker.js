AFRAME.registerComponent("create-markers", {
  
    init: async function() {
  
        var mainScene = document.querySelector("#main-scene");
        var toys = await this.getAllToys();
        
        toys.map(toy => {
            var marker = document.createElement("a-marker");   
            marker.setAttribute("id", toy.id);
            marker.setAttribute("type", "pattern");
            marker.setAttribute("url", toy.marker_pattern_url);
            marker.setAttribute("cursor", {
            rayOrigin: "mouse"
            });
    
            //set the markerhandler component
            marker.setAttribute("markerhandler", {});
            mainScene.appendChild(marker);

          if (!toy.is_out_of_stock){
    
            // Adding 3D model to scene
            var model = document.createElement("a-entity");    
            model.setAttribute("id", `model-${toy.id}`);
            model.setAttribute("position", toy.model_geometry.position);
            model.setAttribute("rotation", toy.model_geometry.rotation);
            model.setAttribute("scale", toy.model_geometry.scale);
            model.setAttribute("gltf-model", `url(${toy.model_url})`);
            model.setAttribute("gesture-handler", {});
            model.setAttribute("animation-mixer", {});
            model.setAttribute("visible", false);
            marker.appendChild(model);

            // Main Plane
            var mainPlane = document.createElement("a-plane");
            mainPlane.setAttribute("id", `main-plane-${toy.id}`);
            mainPlane.setAttribute("position", { x: 0, y: 0, z: 0 });
            mainPlane.setAttribute("rotation", { x: -90, y: 0, z: 0 });
            mainPlane.setAttribute("material", {
              color: "#ffd880"
            });
            mainPlane.setAttribute("width", 2.3);
            mainPlane.setAttribute("height", 2.5);
            mainPlane.setAttribute("visible", false);
            marker.appendChild(mainPlane);
    
            // Toy title
            var toyTitle = document.createElement("a-entity");
            toyTitle.setAttribute("id", `toy-title-${toy.id}`);
            toyTitle.setAttribute("position", { x: 0, y: 0, z: 0.1 });
            toyTitle.setAttribute("rotation", { x: 0, y: 0, z: 0 });
            toyTitle.setAttribute("text", {
            font: "monoid",
            color: "black",
            width: 1.8,
            height: 1,
            align: "center",
            value: toy.toy_name.toUpperCase()
            });
            titlePlane.appendChild(toyTitle);

            // Toy title background plane
            var titlePlane = document.createElement("a-plane");
            titlePlane.setAttribute("id", `title-plane-${toy.id}`);
            titlePlane.setAttribute("position", { x: 0, y: 0.89, z: 0.02 });
            titlePlane.setAttribute("rotation", { x: 0, y: 0, z: 0 });
            titlePlane.setAttribute("width", 1.69);
            titlePlane.setAttribute("height", 0.3);
            titlePlane.setAttribute("material", { color: "#F0C30F" });
            mainPlane.appendChild(titlePlane);

            // Toy title
            var toyTitle = document.createElement("a-entity");
            toyTitle.setAttribute("id", `toy-title-${toy.id}`);
            toyTitle.setAttribute("position", { x: 1.3, y: 0, z: 0.1 });
            toyTitle.setAttribute("rotation", { x: 0, y: 0, z: 0 });
            toyTitle.setAttribute("text", {
              font: "aileronsemibold",
              color: "#290149",
              width: 4.5,
              height: 3,
              align: "left",
              value: toy.toy_name.toUpperCase()
            });
            titlePlane.appendChild(toyTitle);

            // Toy price
            var price = document.createElement("a-entity");
            price.setAttribute("id", `price-${toy.id}`);
            price.setAttribute("position", { x: -0.65, y: 0.75, z: 0.1 });
            price.setAttribute("rotation", { x: 0, y: 0, z: 0 });
            price.setAttribute("text", {
              font: "aileronsemibold",
              color: "#290149",
              width: 5,
              align: "center",
              value: `$${toy.price}`
            });
    
            mainPlane.appendChild(price);

            // Toy Description
            var description = document.createElement("a-entity");
            description.setAttribute("id", `description-${toy.id}`);
            description.setAttribute("position", { x: 0.3, y: 0, z: 0.1 });
            description.setAttribute("rotation", { x: 0, y: 0, z: 0 });
            description.setAttribute("text", {
            font: "monoid",
            color: "black",
            width: 2,
            heigh: 5,
            lineHeight: 50,
            letterSpacing: 2,
            align: "left",
            value: `${toy.description}`
            });
            mainPlane.appendChild(ingredients);

            // Toy Age
            var age = document.createElement("a-entity");
            age.setAttribute("id", `toy-age-${toy.id}`);
            age.setAttribute("position", { x: -0.75, y: -0.8, z: 0.1 });
            age.setAttribute("rotation", { x: 0, y: 0, z: 0 });
            age.setAttribute("text", {
            font: "monoid",
            color: "black",
            width: 1.8,
            height: 1,
            align: "center",
            value: `Age: ${toy.age_group}`
            });
            mainPlane.appendChild(age);

            // Toy Rating plane
            var ratingPlane = document.createElement("a-entity");
            ratingPlane.setAttribute("id", `rating-plane-${toy.id}`);
            ratingPlane.setAttribute("position", { x: 2, y: 0, z: 0.5 });
            ratingPlane.setAttribute("geometry", {
              primitive: "plane",
              width: 1.5,
              height: 0.3
            });

            ratingPlane.setAttribute("material", {
              color: "#F0C30F"
            });
            ratingPlane.setAttribute("rotation", { x: -90, y: 0, z: 0 });
            ratingPlane.setAttribute("visible", false);

            // Ratings
            var rating = document.createElement("a-entity");
            rating.setAttribute("id", `rating-${toy.id}`);
            rating.setAttribute("position", { x: 0, y: 0.05, z: 0.1 });
            rating.setAttribute("rotation", { x: 0, y: 0, z: 0 });
            rating.setAttribute("text", {
              font: "mozillavr",
              color: "black",
              width: 2.4,
              align: "center",
              value: `Customer Rating: ${toy.last_rating}`
            });

            ratingPlane.appendChild(rating);
            marker.appendChild(ratingPlane);

            // Toy review plane
            var reviewPlane = document.createElement("a-entity");
            reviewPlane.setAttribute("id", `review-plane-${toy.id}`);
            reviewPlane.setAttribute("position", { x: 2, y: 0, z: 0 });
            reviewPlane.setAttribute("geometry", {
              primitive: "plane",
              width: 1.5,
              height: 0.5
            });

            reviewPlane.setAttribute("material", {
              color: "#F0C30F"
            });
            reviewPlane.setAttribute("rotation", { x: -90, y: 0, z: 0 });
            reviewPlane.setAttribute("visible", false);

            // Toy review
            var review = document.createElement("a-entity");
            review.setAttribute("id", `review-${toy.id}`);
            review.setAttribute("position", { x: 0, y: 0.05, z: 0.1 });
            review.setAttribute("rotation", { x: 0, y: 0, z: 0 });
            review.setAttribute("text", {
              font: "mozillavr",
              color: "black",
              width: 2.4,
              align: "center",
              value: `Customer Review: \n${toy.last_review}`
            });
            
            reviewPlane.appendChild(review);
            marker.appendChild(reviewPlane);
 
          }
          
        });

    }, 

    getAllToys: async function() {
      return await firebase
        .firestore()
        .collection("dishes")
        .get()
        .then(snap => {
          return snap.docs.map(doc => doc.data());
        });
    },

  });