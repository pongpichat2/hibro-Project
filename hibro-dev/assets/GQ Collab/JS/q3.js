const score = new Vue({
  el: ".demo",
  data: {
    Quiz: {
      // "no1":null,
      score_Store:{
        no3: null
      },
      totalScore: 0,
      scorePage: {
        qu3: null,
      },
    },
    newScore: null,
  },
  methods: {
    addAnswer() {
      if (!this.newScore) {
        alert("โปรดกรอกข้อมูลด้วยครับ");
      } else {
          this.change_Answer()

        this.Quiz.scorePage.qu3 = this.newScore;
        this.newScore = "";
        this.Calculator_Score();
        this.saveScore();
        console.log(this.Quiz)

      }
    },
    change_Answer(){
        if (this.newScore == "A") {
            this.Quiz.score_Store.no3 = 0;
          } else if (this.newScore == "B") {
            this.Quiz.score_Store.no3 = 0;
          } else if (this.newScore == "C") {
            this.Quiz.score_Store.no3 = 1;
          } else if (this.newScore == "D") {
            this.Quiz.score_Store.no3 = 2;
          } else if (this.newScore == "E") {
            this.Quiz.score_Store.no3 = 4;
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
      localStorage.setItem("Quiz", parsed);
      window.location = "q4.html";
    },
  },
  mounted() {
    if (localStorage.getItem("Quiz")) {
      try {
        this.Quiz = JSON.parse(localStorage.getItem("Quiz"));

        const Storg = JSON.parse(localStorage.Quiz);
     

        if(Storg.scorePage.qu3) {
    
          if (Storg.scorePage.qu3 == "A") {
            this.newScore = "A";
            $("#Answer1").prop('checked', true);
            document.getElementById("image_banana").innerHTML =
              "<img src='../images/9.jpg' width='200px' height='200px'>";
          } else if (Storg.scorePage.qu3 == "B") {
             
            this.newScore = "B";
            $("#Answer2").prop('checked', true);
            document.getElementById("image_banana").innerHTML =
              "<img src='../images/10.jpg' width='200px' height='200px'>";
          } else if (Storg.scorePage.qu3 == "C") {
            $("#Answer3").prop('checked', true);
            this.newScore = "C";
            document.getElementById("image_banana").innerHTML =
              "<img src='../images/11.jpg' width='200px' height='200px'>";
          } else if (Storg.scorePage.qu3 == "D") {
            $("#Answer4").prop('checked', true);
            this.newScore = "D";

            document.getElementById("image_banana").innerHTML =
              "<img src='../images/12.jpg' width='200px' height='200px'>";
          } else if (Storg.scorePage.qu3 == "E") {
            $("#Answer5").prop('checked', true);
            this.newScore = 4;
            document.getElementById("image_banana").innerHTML =
              "<img src='../images/13.jpg' width='200px' height='200px'>";
          }
        }

        $(document).ready(function () {
          $("#Answer1").click(function () {
            document.getElementById("image_banana").innerHTML =
              "<img src='../images/9.jpg' width='200px' height='200px'>";
          });
    
          $("#Answer2").click(function () {
            document.getElementById("image_banana").innerHTML =
              "<img src='../images/10.jpg' width='200px' height='200px'>";
          });
    
          $("#Answer3").click(function () {
            document.getElementById("image_banana").innerHTML =
              "<img src='../images/11.jpg' width='200px' height='200px'>";
          });
    
          $("#Answer4").click(function () {
            document.getElementById("image_banana").innerHTML =
              "<img src='../images/12.jpg' width='200px' height='200px'>";
          });
          $("#Answer5").click(function () {
            document.getElementById("image_banana").innerHTML =
              "<img src='../images/13.jpg' width='200px' height='200px'>";
          });


          $('#label-Answer1').click(function(){
            $("#Answer1").prop('checked', true);
            document.getElementById("image_banana").innerHTML ="<img src='../images/9.jpg' width='200px' height='200px'>"
     
        })

        $('#label-Answer2').click(function(){
            $("#Answer2").prop('checked', true);
            document.getElementById("image_banana").innerHTML ="<img src='../images/10.jpg' width='200px' height='200px'>"
        })

        $('#label-Answer3').click(function(){
            $("#Answer3").prop('checked', true);
            document.getElementById("image_banana").innerHTML ="<img src='../images/11.jpg' width='200px' height='200px'>"
        })

        $('#label-Answer4').click(function(){
            $("#Answer4").prop('checked', true);
            document.getElementById("image_banana").innerHTML ="<img src='../images/12.jpg' width='200px' height='200px'>"
        })
        $('#label-Answer5').click(function(){
          $("#Answer5").prop('checked', true);
          document.getElementById("image_banana").innerHTML ="<img src='../images/13.jpg' width='200px' height='200px'>"
      })
        });

      } catch (e) {
        localStorage.removeItem("Quiz");
      }
    } else {
      console.log(localStorage.Quiz);
    }

  },
});
