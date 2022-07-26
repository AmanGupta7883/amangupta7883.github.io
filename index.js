comingsoon=()=>{
    alert('Coming Soon...');
}
chbo=()=>{
    // document.getElementById('albox').style.innerHTML="Hi "+ $(name)+", Welcome to Skill Resource! To get any type of help click on the question.";
    document.getElementById('chatbox').style.display='block';
}
cl=()=>{
    document.getElementById('chatbox').style.display='none';
    document.getElementById('chatans').style.innerHTML="";
}
q1=()=>{
    document.getElementById('chatans').innerHTML='We had made most of the courses free. Which will help you to boost your carrer.';
    document.getElementById('chatans').style.display='block';
    document.getElementById('chatans').style.display='flex';
}
q2=()=>{
    document.getElementById('chatans').innerHTML='<a href="mailto:techytrigger@gmail.com">Mail Here</a>';
    document.getElementById('chatans').style.display='block';
}
q3=()=>{
    document.getElementById('chatans').innerHTML='<a href="mailto:techytrigger@gmail.com">Mail Us</a> or <a href="tel:5012456985">Contact Here</a>';
    document.getElementById('chatans').style.display='block';
}
q4=()=>{
    document.getElementById('chatans').innerHTML='Yes you will get the certificate of Internship which you can also display in resume.';
    document.getElementById('chatans').style.display='block';
}
cmore=()=>{
    document.getElementById('chatQ').style.height='80%';
    document.getElementById('sdown').style.display='none';
}
