	mapboxgl.accessToken =mapToken;
    const map = new mapboxgl.Map({
        container:'map',  
        center:coordinates, // [lng, lat].  
        zoom: 9 
    });
    
  

    const marker=new mapboxgl.Marker({color:'#fe424d'})
        .setLngLat(coordinates)
        .addTo(map)
    
     
    