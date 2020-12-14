const score = new Vue({
    el:'.demo',
    data:{
        
        scoreResult:"",
        titel:"",
        rangeScore:"",
        contentKey:"",
        content:"",




    },
    mounted(){

        const Storg = JSON.parse(localStorage.Quiz)
        console.log(Storg)
        this.scoreResult = Storg.totalScore
        
        const scoretotal = Storg.totalScore

        if(scoretotal < 21){
            this.titel = "Sleeping Beauty"
            this.rangeScore = " เจ้าชายนิทราโอ้! เจ้าจงไปพบหมอ ณ.บัดดี้ ข้าขอเป็นกำลังใจให้เจ้า"
            this.content = "มีสัญญาณของภาวะโรคหย่อนสมรรถภาพทางเพศ แนะนำให้พบแพทย์"
 
            document.getElementById("image_total").innerHTML ="<img src='../img/14.jpg' width='200px' height='250px'>"
        }
        else if(scoretotal < 41){
            this.titel = "Apprentice"
            this.rangeScore = "ทหารฝึกหัดดาบของเจ้าบิ่นหมดแล้ว ได้เวลาส่งให้ช่างตีเหล็กซ่อมแล้ว และให้อาหารม้ารอได้เลย  "
            this.content = "มีความเสี่ยงสูงที่เป็นโรคหย่อนสมรรถภาพทางเพศ แนะนำให้พบแพทย์"
            document.getElementById("image_total").innerHTML ="<img src='../img/15.jpg' width='200px' height='150px'>"
        }
        else if(scoretotal < 61){
            this.titel = "Knight"
            this.rangeScore = "อัศวินดาบของเจ้าเริ่มมีสนิมจากการออกศึกแล้ว"
            this.content = "มีความเสี่ยงปานกลางที่จะเป็นโรคหย่อนสมรรถภาพทางเพศ"
            document.getElementById("image_total").innerHTML ="<img src='../img/16.jpg' width='200px' height='150px'>"
            
        }
        else if(scoretotal < 81){
            this.titel = "Commander"
            this.rangeScore = "แม่ทัพผู้ชนะและสันทัดในการทำศึก แต่เอ๊ะ! จะชนะในทุกศึกไหม?  "
            this.content = "มีความเสี่ยงหรืออาจเริ่มสัญญาณจะเป็นโรคหย่อนสมรรถภาพทางเพศ"
            document.getElementById("image_total").innerHTML ="<img src='../img/17.jpg' width='200px' height='150px'>"

        }
        else{
            this.titel = "I’M THE KING"
            this.rangeScore = "ข้าคือราชาผู้ยิ่งใหญ่ !!ผู้มีดาบที่ทรงพลังกว่าใคร!"
            this.content = "มีความเสี่ยงต่ำมากที่จะเป็นโรคหย่อนสมรรถภาพทางเพศ"
            document.getElementById("image_total").innerHTML ="<img src='../img/18.jpg' width='200px' height='150px'>"
            
        }




    }
})