const score = new Vue({
    el:'.demo',
    data:{
        Quiz:{
            // "no1":null,
            score_Store:{
                no7:null
            },
            totalScore:0,
            scorePage:{
                qu7:null
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
                
                this.Choice_to_score();
                this.Quiz.scorePage.qu7 = this.newScore
                this.newScore = [];
                this.Calculator_Score();
                this.saveScore()

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
                    score += 0
                }
                else if(All_Choice[i] == 'C'){
                    score += 1
                }
                else if(All_Choice[i] == 'D'){
                    score += 1
                }
                else if(All_Choice[i] == 'E'){
                    score += 4
                }

            }
           
            this.Quiz.score_Store.no7 = parseInt(score)

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
            window.location='total.html'
        }
    },
    mounted(){


        if(localStorage.getItem('Quiz')) {
            try {
                this.Quiz = JSON.parse(localStorage.getItem('Quiz'));

                const Storg = JSON.parse(localStorage.Quiz)

                $(document).ready(function(){
                    const score_Before = Storg.scorePage.qu7
                    if(Storg.scorePage.qu7){
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
                    }

                    $('#Answer5').click(function(){
            
                        if($('#Answer5').is(':checked')){
                            $("#Answer1").prop('checked', false);
                            $("#Answer2").prop('checked', false);
                            $("#Answer3").prop('checked', false);
                            $("#Answer4").prop('checked', false);
                        }
                    })
            
                    $('#Answer1').click(function(){
                        $("#Answer5").prop('checked', false);
                    })
                    $('#Answer2').click(function(){
                        $("#Answer5").prop('checked', false);
                    })
                    $('#Answer3').click(function(){
                        $("#Answer5").prop('checked', false);
                    })
                    $('#Answer4').click(function(){
                        $("#Answer5").prop('checked', false);
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