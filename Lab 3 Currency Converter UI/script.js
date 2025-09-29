    
     

         function USDtoCuban()
         {
            USD = document.getElementById("Currency").value  
            document.getElementById("Currency2").value= (USD * 24.01).toFixed(2)
         }
         
         function CubanToUSD()
         {
            Cuban= document.getElementById("Currency2").value  
            document.getElementById("Currency").value= (Cuban*0.042).toFixed(2)

         }



     