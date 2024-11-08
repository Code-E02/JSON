

document.addEventListener('DOMContentLoaded', function() {

fetch('games.json')
  .then(response => response.json())
  .then(data => {
    
    

  const cardContent =document.getElementById('container')
  data.forEach(item => {
        const section = document.createElement('section');
        
        section.innerHTML =`
           
            
                
                   
                        
                         <h5>${item.title}</h5> 
                            
                            
                             <img style="width:200px; border-style:solid; border-color: black; "  src ="${item.imageUrl}" alt ="${item.altText}">
                    
                    
                             <p style='color:white; background-color: blue; border-radius:6%'>${item.text}</p> 
                          
                    
                <hr>
                
               
            
            
            
            `;
        cardContent.appendChild(section);   
    });

    });
    

});
