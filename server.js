var express=require('express');
var app=express();
app.use(express.urlencoded({extended:true}));
app.post("/upload",function(req,res){
    
    res.send(`upload page <a/href="/">home</a> `)
})
app.get("/",function(req,res){
    res.send(`
        <link rel="stylesheet" href="style.css">
        <link rel="icon" href="Image/faviconImage.png" sizes="16*16" type="image/png">
        <link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">
        <nav class="header_bar"> 
        <div id="header_text">
            <div id="logo_container">
                <img src="Image/faviconImage.png" alt="Artinsta Logo" class="logo">
            </div>
            <div>Artinsta</div>
        </div>
    </nav>
    <div id="parent_container">
        <div id="container">
            <div id="head_text_container">
                <h1 id="head_text">Artinsta</h1>
                <p id="description_p">Artinsta is a platform where you can showcase your artistic talents.
                    Whether you're a painter, photographer, or digital artist, Artinsta is the perfect place to 
                    share your work and gain inspiration.
                </p>
                <a id="upload_btn" href="upload.html"><span id="upload_icon"></span> Upload</a>
            </div>
            <div id="head_painting_container">
                <img src="Image/swan_painting.jpg" alt="Artistic Painting" id="head_painting">
            </div>
        </div>
        <div id="main_container">
            <section id="gallery"> 
                <div class="art-card">
                    <img src="Image/streetLights.jpeg" alt="Starry Night">
                    <div class="art-text" data-aos="fade-left" data-aos-delay="300">
                        <h2>Starry Night</h2>
                        <p>By Vincent van — A swirling masterpiece of post-impressionism.</p>
                    </div>
                </div>

                <div class="art-card reverse">
                    <div class="art-text" data-aos="fade-right" data-aos-delay="300">
                        <h2>Luiet</h2>
                        <p>By Kylie winser — A painting of a sorrowful girl in the color expecting society.</p>
                    </div>
                    <img src="Image/facePic.webp" alt=" face pic">
                </div>
            </section>
        </div>
    </div>

    
  
    
  <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
<script>
  AOS.init({
    duration: 900, // Animation speed
    easing: 'ease-in-out',
    once: false // Animate only once
  });
</script>
        `);
});

app.listen(3000,function(){
    console.log("server running");
}) 