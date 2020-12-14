const score = new Vue({
    el:'.demo',
    data:{

        Quiz:{
            // "no1":null,
            score_Store:{
                no2:null,
            },
            totalScore:0,
            scorePage:{
                qu2:null
            }
        },
        newScore:null,


    },
    methods:{
        
        addAnswer(){
            this.check_isChecked();
            if(!this.newScore){
                alert('โปรดเลือกคำตอบด้วยค่ะ')
            } 
            else{
                // window.localStorage.removeItem('name');
                
                this.Quiz.score_Store.no2 = parseInt(this.newScore);
                
                this.Quiz.scorePage.qu2 = this.newScore
                this.newScore = '';
                this.Calculator_Score();
                this.saveScore();
                console.log(localStorage)

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
                this.newScore = 8;
            }
            else if($("#Answer3").is(':checked')){
                this.newScore = 12;
            }
            else if($("#Answer4").is(':checked')){
                this.newScore = 16;
            }
        
        },
        Calculator_Score(){
            // console.log(this.Quiz.scorePage)
            let all_Score = this.Quiz.scorePage
            let score = 0
            for (const key in all_Score) {
                score += Number(all_Score[key])
            }
            this.Quiz.totalScore =  score
            

        },
        saveScore() {
            
            let parsed = JSON.stringify(this.Quiz);
            localStorage.setItem('Quiz', parsed);
            window.location='q3.html'
        },
       

        

    },
    mounted() {
        



        if(localStorage.getItem('Quiz')) {
            try {
                this.Quiz = JSON.parse(localStorage.getItem('Quiz'));

                const Storg = JSON.parse(localStorage.Quiz)
                console.log(Storg)

                if(Storg.scorePage.qu2){
                    if (Storg.scorePage.qu2 == 0) {
                        $("#Answer1").prop('checked', true);
                       
                        this.newScore = 0

                            document.getElementById("image_banana").innerHTML =
                                "<img src='../images/5.jpg' width='200px' height='200px'>"
                             
                        } else if (Storg.scorePage.qu2 == 8) {
                            this.newScore = 8
                            document.getElementById("image_banana").innerHTML =
                                "<img src='../images/6.jpg' width='200px' height='200px'>"
                                $("#Answer2").prop('checked', true);
                        } else if (Storg.scorePage.qu2 == 12) {
                            this.newScore = 12
                            document.getElementById("image_banana").innerHTML =
                                "<img src='../images/7.jpg' width='200px' height='200px'>"
                                $("#Answer3").prop('checked', true);
                        } else if (Storg.scorePage.qu2 == 16) {
                            this.newScore = 16
                            document.getElementById("image_banana").innerHTML =
                                "<img src='../images/8.jpg' width='200px' height='200px'>"
                                $("#Answer4").prop('checked', true);
                        }
                }

                $(document).ready(function () {

                    $('#Answer1').click(function(){

                        document.getElementById("image_banana").innerHTML ="<img src='../images/5.jpg' width='200px' height='200px'>"
                    })

                    $('#Answer2').click(function(){
          
                            document.getElementById("image_banana").innerHTML =
                                "<img src='../images/6.jpg' width='200px' height='200px'>"
                    })
    
                    $('#Answer3').click(function(){

                        document.getElementById("image_banana").innerHTML =
                            "<img src='../images/7.jpg' width='200px' height='200px'>"
                    })
                    $('#Answer4').click(function(){
          
                                document.getElementById("image_banana").innerHTML =
                                    "<img src='../images/8.jpg' width='200px' height='200px'>"
                    })

                    $('#label-Answer1').click(function(){
                        $("#Answer1").prop('checked', true);
                        document.getElementById("image_banana").innerHTML ="<img src='../images/5.jpg' width='200px' height='200px'>"
                    })

                    $('#label-Answer2').click(function(){
                        $("#Answer2").prop('checked', true);
                        document.getElementById("image_banana").innerHTML ="<img src='../images/6.jpg' width='200px' height='200px'>"
                    })

                    $('#label-Answer3').click(function(){
                        $("#Answer3").prop('checked', true);
                        document.getElementById("image_banana").innerHTML ="<img src='../images/7.jpg' width='200px' height='200px'>"
                    })

                    $('#label-Answer4').click(function(){
                        $("#Answer4").prop('checked', true);
                        document.getElementById("image_banana").innerHTML ="<img src='../images/8.jpg' width='200px' height='200px'>"
                    })
        
                })
                
            } catch(e) {
                localStorage.removeItem('Quiz');
            }
        }
        else{
            console.log(localStorage.Quiz);
        }
        
        
    },
})