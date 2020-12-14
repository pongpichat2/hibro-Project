const score = new Vue({
    el:'.demo',
    data:{
        Quiz:{
            // "no1":null,
            score_Store:{
                no4: null
              },
            totalScore:0,
            scorePage:{
                qu4:null
            }
        },
        newScore:null,
    },
    methods:{

        addAnswer(){
            if(!this.newScore){
                alert('โปรดกรอกข้อมูลด้วยครับ')
            } 
            else{
                // window.localStorage.removeItem('name');


                this.change_Answer()
      
                this.Quiz.scorePage.qu4 = this.newScore
                this.newScore = '';
                this.Calculator_Score();
                this.saveScore();
          
                

            }
        },  
        change_Answer(){
            if (this.newScore == "A") {
                this.Quiz.score_Store.no4 = 0;
              } else if (this.newScore == "B") {
                this.Quiz.score_Store.no4 = 2;
              } else if (this.newScore == "C") {
                this.Quiz.score_Store.no4 = 4;
              } else if (this.newScore == "D") {
                this.Quiz.score_Store.no4 = 6;
              } else if (this.newScore == "E") {
                this.Quiz.score_Store.no4 = 10;
              }
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
            window.location='q5.html'
        },
    },
    mounted(){
        

        if(localStorage.getItem('Quiz')) {
            try {
                this.Quiz = JSON.parse(localStorage.getItem('Quiz'));

                const Storg = JSON.parse(localStorage.Quiz)

                if(Storg.scorePage.qu4){
                
                    const scorePage4 = Storg.scorePage.qu4
                    
                    if(scorePage4 == "A"){
                        this.newScore = "A"
                        $("#Answer1").prop('checked', true);
                        
                    }
                    else if(scorePage4 == "B"){
                        this.newScore = "B"
                        $("#Answer2").prop('checked', true);
                        
                    }
                    else if(scorePage4 == "C"){
                        this.newScore = "C"
                        $("#Answer3").prop('checked', true);
                        
                    }
                    else if(scorePage4 == "D"){
                        this.newScore = "D"
                        $("#Answer4").prop('checked', true);
                        
                    }
                    else if(scorePage4 == "E"){
                        this.newScore = "E"
                        $("#Answer5").prop('checked', true);
                        
                    }
                }
            } catch(e) {
                localStorage.removeItem('Quiz');
            }
        }
        else{
            console.log(localStorage.Quiz);
        }



        
    }
})