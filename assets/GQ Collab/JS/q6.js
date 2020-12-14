const score = new Vue({
    el:'.demo',
    data:{
        Quiz:{
            // "no1":null,
            score_Store:{
                no6: null
              },
            totalScore:0,
            scorePage:{
                qu6:null
            }
        },
        newScore:[],
    },
    methods:{
        addAnswer(){
            if(!this.newScore){
                alert('โปรดกรอกข้อมูลด้วยครับ')
            } 
            else{
                this.checkIsBox()
                this.Quiz.scorePage.qu6 = this.newScore
                this.Choice_to_score();

                this.Calculator_Score();

                this.newScore = [];
                this.saveScore();
                console.log(this.Quiz)

            }
            
        },
        checkIsBox(){
            let checkedNum = $('input[name="Answer"]:checked');
            let array = []
            checkedNum.each(function(i){
                array[i] = $(this).val();
              });
            this.newScore = array
        },
        Choice_to_score(){
            
            let All_Choice = this.newScore

            let score = 0
            for(i = 0,len = All_Choice.length; i < len; i++){
                if(All_Choice[i] == 'A'){
                    score += 0
                }
                else if(All_Choice[i] == 'B'){
                    score += 6
                }
                else if(All_Choice[i] == 'C'){
                    score += 4
                }
                else if(All_Choice[i] == 'D'){
                    score += 6
                }
                else if(All_Choice[i] == 'E'){
                    score += 6
                }
                else if(All_Choice[i] == 'F'){
                    score += 4
                }
                else if(All_Choice[i] == 'G'){
                    score += 10
                }
                
            }

            this.Quiz.score_Store.no6 = parseInt(score)
            
        },
        Calculator_Score(){

            let all_Score = this.Quiz.score_Store
            let score = 0
            for (const key in all_Score) {
                score += parseInt(all_Score[key])

            }
            this.Quiz.totalScore = score

        },
        saveScore() {
            
            let parsed = JSON.stringify(this.Quiz);
            localStorage.setItem('Quiz', parsed);
            // window.location='q7.html'
        }
    },
    mounted(){
        

        if(localStorage.getItem('Quiz')) {
            try {
                this.Quiz = JSON.parse(localStorage.getItem('Quiz'));

                const Storg = JSON.parse(localStorage.Quiz)
                console.log(Storg)

                $(document).ready(function(){
                    const score_Before = Storg.scorePage.qu6
                    if(Storg.scorePage.qu6){
                        if(score_Before.includes('A')){
                
                            $("#Answer1").prop('checked', true);
                        }
                        if(score_Before.includes('B')){
                            // console.log('asdasda')
                            $("#Answer2").prop('checked', true);
                        }
                        if(score_Before.includes('C')){
                            // console.log('asdasda')
                            $("#Answer3").prop('checked', true);
                        }
                        if(score_Before.includes('D')){
                            // console.log('asdasda')
                            $("#Answer4").prop('checked', true);
                        }
                        if(score_Before.includes('E')){
                            // console.log('asdasda')
                            $("#Answer5").prop('checked', true);
                        }
                        if(score_Before.includes('F')){
                            
                            $("#Answer6").prop('checked', true);
                        }

                        if(score_Before.includes('G')){
                            
                            $("#Answer7").prop('checked', true);
                        }
                    }
                    

                    $('#Answer7').click(function(){
            
                        if($('#Answer7').is(':checked')){
                            $("#Answer1").prop('checked', false);
                            $("#Answer2").prop('checked', false);
                            $("#Answer3").prop('checked', false);
                            $("#Answer4").prop('checked', false);
                            $("#Answer5").prop('checked', false);
                            $("#Answer6").prop('checked', false);
                        }
                    })

                    $('#Answer1').click(function(){
                        $("#Answer7").prop('checked', false);
                    })
                    $('#Answer2').click(function(){
                        $("#Answer7").prop('checked', false);
                    })
                    $('#Answer3').click(function(){
                        $("#Answer7").prop('checked', false);
                    })
                    $('#Answer4').click(function(){
                        $("#Answer7").prop('checked', false);
                    })
                    $('#Answer5').click(function(){
                        $("#Answer7").prop('checked', false);
                    })
                    $('#Answer6').click(function(){
                        $("#Answer7").prop('checked', false);
                    })

                    

                    
                    
                })

            } catch(e) {
                localStorage.removeItem('Quiz');
            }
        }
        else{
            console.log(localStorage.Quiz);
        }

        


    }
})