    
     

         function USDtoYen()
         {
            USD = document.getElementById("Currency").value  
            document.getElementById("Currency2").value= (USD * 147.87).toFixed(2)
         }
         
         function YenToUSD()
         {
            Yen= document.getElementById("Currency2").value  
            document.getElementById("Currency").value= (Yen*0.0068 ).toFixed(2)

         }



        //document.getElementById("Currency2").value = USD*147.67;
         //   let Yen = document.getElementById("Currency2").value;
         //  alert( USD * 147.67 )
        


     