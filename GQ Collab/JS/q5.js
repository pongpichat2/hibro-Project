const score = new Vue({
    el:".demo",
    data:{
        Quiz:{
            // "no1":null,
            score_Store:{
                no5: null
              },
            totalScore:0,
            scorePage:{
                qu5:null
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
        
                this.Quiz.scorePage.qu5 = this.newScore
                this.Calculator_Score();
                this.newScore = '';

                this.saveScore();
                console.log(this.Quiz)
                
                

            }
        },
        change_Answer(){
            if (this.newScore == "A") {
                this.Quiz.score_Store.no5 = 10;
              } else if (this.newScore == "B") {
                this.Quiz.score_Store.no5 = 6;
              } else if (this.newScore == "C") {
                this.Quiz.score_Store.no5 = 2;
              } else if (this.newScore == "D") {
                this.Quiz.score_Store.no5 = 0;
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
            window.location='q6.html'
        },
        
    },
    mounted(){
       
        console.log(localStorage)
        if(localStorage.getItem('Quiz')) {
            try {
                this.Quiz = JSON.parse(localStorage.getItem('Quiz'));

                const Storg = JSON.parse(localStorage.Quiz)

                if(Storg.scorePage.qu5){
                
                    const scorePage5 = Storg.scorePage.qu5
                    
                    if(scorePage5 == "A"){
                        this.newScore = "A"
                        $("#Answer1").prop('checked', true);
                        
                    }
                    else if(scorePage5 == "B"){
                        this.newScore = "B"
                        $("#Answer2").prop('checked', true);
                        
                    }
                    else if(scorePage5 == "C"){
                        this.newScore = "C"
                        $("#Answer3").prop('checked', true);
                        
                    }
                    else if(scorePage5 == "D"){
                        this.newScore = "D"
                        $("#Answer4").prop('checked', true);
                        
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