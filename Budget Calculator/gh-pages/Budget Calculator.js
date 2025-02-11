function Calculate() 
    {
        let Gross_salary = document.getElementById("Gross_salary").value;
        let Expenditure = document.getElementById("Expenditure").value;

        Gross_salary = Number(Gross_salary);
        Expenditure  = Number(Expenditure);

        let balance = Gross_salary - Expenditure;

        document.getElementById("Result").innerText = "Your remaining balance is: KSH " +balance;
    }
  function getSubmittedVideo()
       {
            let VideoMsc = document.getElementById("VideoMsc");
            let file = VideoMsc.files[0];

            let videoURL = URL.createObjectURL(file);
            let VideoPreview =document.getElementById("VideoPreview");

            VideoPreview.src =videoURL;
       }
   document.getElementById("submtvideo").addEventListener("click",getSubmittedVideo);