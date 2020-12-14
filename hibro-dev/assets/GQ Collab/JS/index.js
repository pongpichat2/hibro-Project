const score = new Vue({
    el:'.demo',
    data:{
        log_image:null

    },
    mounted(){

        localStorage.removeItem("Quiz");

        this.Log_image_Store = JSON.parse(localStorage.getItem('Log_image'));

        if(this.Log_image_Store.length > 0){
     
            this.log_image = this.Log_image_Store
            const id_image = Math.floor(Math.random() * this.Log_image_Store.length);

            $('#demo').css('background-image', 'url("' + "../images/1x/BG_mobile_0" + this.log_image[id_image] +".png" + '")');

            this.log_image.splice(this.log_image.indexOf(this.log_image[id_image]), 1);

            let parsed = JSON.stringify(this.log_image);
            localStorage.setItem('Log_image', parsed);
        }
        else{
            console.log('2')
            let log_image = [1,2,3,4,5,6,7,8]
            const id_image = Math.floor(Math.random() * log_image.length);
            $('#demo').css('background-image', 'url("' + "../images/1x/BG_mobile_0" + log_image[id_image] +".png" + '")');
            log_image.splice(log_image.indexOf(log_image[id_image]), 1);
            let parsed = JSON.stringify(log_image);
            localStorage.setItem('Log_image', parsed);
    
        }
        
        

        
        

    }
})