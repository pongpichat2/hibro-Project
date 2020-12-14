
const score = new Vue({
    el:'.demo',
    data:{

        Quiz:{
            score_Store:{
                no1:null
            },
            totalScore:null,
            scorePage:{
                qu1:null
            }
        },
        newScore:null,


    },
    methods:{
        addAnswer(){
            // console.log(this.newScore)
            this.check_isChecked();

            if(!this.newScore){
                alert('โปรดเลือกคำตอบด้วยค่ะ')
            } 
            else{
                
                this.Quiz.score_Store.no1 = parseInt(this.newScore)
                this.Quiz.scorePage.qu1 = this.newScore
                this.newScore = "";
                this.Calculator_Score();
                this.saveScore();


            }

        },
        check_isChecked(){
            // $("#Answer3").is(':checked'){
            //     this.newScore = 6;
            // }
            if($("#Answer1").is(':checked')){
                
                this.newScore = 0;
            }
            else if($("#Answer2").is(':checked')){
                this.newScore = 4;
            }
            else if($("#Answer3").is(':checked')){
                this.newScore = 6;
            }
            else if($("#Answer4").is(':checked')){
                this.newScore = 10;
            }
        
        },
        Calculator_Score(){

                let all_Score = this.Quiz.score_Store
                let score = 0
                for (const key in all_Score) {
                    score += Number(all_Score[key])
                }
                this.Quiz.totalScore =  score

        },
        saveScore() {

            let parsed = JSON.stringify(this.Quiz);
            localStorage.setItem('Quiz', parsed);
            window.location='q2.html'

        },

    },
    mounted() {

        if(localStorage.getItem('Quiz')) {
            try {
                // localStorage.removeItem('Quiz');
                this.Quiz = JSON.parse(localStorage.getItem('Quiz'));

                

                const Storg = JSON.parse(localStorage.Quiz)
                if(Storg.scorePage.qu1){
                
                            if (Storg.scorePage.qu1 == 0) {
                        
                        
                                document.getElementById("image_banana").innerHTML ="<img src='../images/1.jpg' width='200px' height='200px'>"
                                $("#Answer1").prop('checked', true);
                                this.newScore = 0
                            } 
                            else if (Storg.scorePage.qu1 == 4) {
                                console.log('เห็ด')
                        
                                document.getElementById("image_banana").innerHTML ="<img src='../images/2.jpg' width='200px' height='200px'>"
                                $("#Answer2").prop('checked', true);
                                this.newScore = 4
                            } 
                            else if (Storg.scorePage.qu1 == 6) {
                                $("#Answer3").prop('checked', true);
                        
                                document.getElementById("image_banana").innerHTML ="<img src='../images/3.jpg' width='200px' height='200px'>"
                                this.newScore = 6
                                
                            } else if (Storg.scorePage.qu1 == 10) {
                                $("#Answer4").prop('checked', true);
                            
                                document.getElementById("image_banana").innerHTML ="<img src='../images/4.jpg' width='200px' height='200px'>"
                                this.newScore = 10

                            }
                }

                

                    $('#Answer1').click(function(){
                        document.getElementById("image_banana").innerHTML ="<img src='../images/1.jpg' width='200px' height='200px'>"
                    })
                    $('#Answer2').click(function(){
                        document.getElementById("image_banana").innerHTML ="<img src='../images/2.jpg' width='200px' height='200px'>"
                    })
        
                    $('#Answer3').click(function(){
                        document.getElementById("image_banana").innerHTML ="<img src='../images/3.jpg' width='200px' height='200px'>"
                    })
        
                    $('#Answer4').click(function(){
                        document.getElementById("image_banana").innerHTML ="<img src='../images/4.jpg' width='200px' height='200px'>"
                    })

                    
                    $('#label-Answer1').click(function(){
                        $("#Answer1").prop('checked', true);
                        document.getElementById("image_banana").innerHTML ="<img src='../images/1.jpg' width='200px' height='200px'>"

                    })
            
                    $('#label-Answer2').click(function(){
                        $("#Answer2").prop('checked', true);


                        document.getElementById("image_banana").innerHTML ="<img src='../images/2.jpg' width='200px' height='200px'>"
                        
                    })
            
                    $('#label-Answer3').click(function(){

                        $("#Answer3").prop('checked', true);

                        document.getElementById("image_banana").innerHTML ="<img src='../images/3.jpg' width='200px' height='200px'>"

                    })
 
                    $('#label-Answer4').click(function(){
    
                        $("#Answer4").prop('checked',true);
                        document.getElementById("image_banana").innerHTML ="<img src='../images/4.jpg' width='200px' height='200px'>"
                        
                    })

                    
        
                


                
            } catch(e) {
                localStorage.removeItem('Quiz');
            }
        }
        else{
            console.log('sadasdfdf')
        }

       

       

    },

})