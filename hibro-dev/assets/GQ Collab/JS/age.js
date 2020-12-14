const score = new Vue({
    el:".demo",
    data:{
        
        Quiz:{
            score_Store:{
                ageScore:null
            },
            totalScore:null,
            scorePage:{
                agePage:null
            }
        },
        age1:1,
        age2:8,
    },
    methods:{
        addAnswer(){
            if(!this.age1 && !this.age2){
                alert('โปรดกรอกอายุด้วยค่ะ')
            } 
            else{

                this.Calcuto_score();

            }

        },
        Calcuto_score(){
            this.Quiz.scorePage.agePage = [this.age1,this.age2]
            const age = (this.age1).toString() + (this.age2).toString()
            if(age < 18){
                alert('คุณมีอายุไม่ถึง 18 ปี')
                document.getElementById('age1').focus()
                return false
            }
            else if(age >= 18 && age <26){
                this.Quiz.score_Store.ageScore = 10
                this.Calculator_Score();
            }
            else if(age >= 26 && age <36){
                this.Quiz.score_Store.ageScore = 8
                this.Calculator_Score();
            }
            else if(age >= 36 && age <46){
                this.Quiz.score_Store.ageScore = 6
                this.Calculator_Score();
            }
            else if(age >= 46 && age <56){
                this.Quiz.score_Store.ageScore = 4
                this.Calculator_Score();
            }
            else if(age >= 56 && age <66){
                this.Quiz.score_Store.ageScore = 2
                this.Calculator_Score();
            }
            else if(age >= 66 && age <76){
                this.Quiz.score_Store.ageScore = 1
                this.Calculator_Score();
            }
            else if (age > 75){
                this.Quiz.score_Store.ageScore = 0
                this.Calculator_Score();
            }
            console.log(this.Quiz.score_Store.ageScore)

        },
        Calculator_Score(){

            let all_Score = this.Quiz.score_Store
            let score = 0
            for (const key in all_Score) {
                score += Number(all_Score[key])
            }
            this.Quiz.totalScore =  score
            this.saveScore();
            
        },
        saveScore() {
            this.age1 = ""
            this.age2 = ""

            let parsed = JSON.stringify(this.Quiz);
            localStorage.setItem('Quiz', parsed);
            window.location='q1.html'

        },

    },
    mounted(){
        if(localStorage.getItem('Quiz')) {
            try {

                this.Quiz = JSON.parse(localStorage.getItem('Quiz'));
                const Storg = JSON.parse(localStorage.Quiz)
                console.log(Storg.scorePage.agePage[0])
                if(Storg.scorePage.agePage){
                    this.age1 = Storg.scorePage.agePage[0]
                    this.age2 = Storg.scorePage.agePage[1]
                }

            } catch(e) {
                localStorage.removeItem('Quiz');
            }
        }
        else{
            console.log('sadasdfdf')
        }
    }

})