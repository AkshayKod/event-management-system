// animation of gallery
var navtl = gsap.timeline()

navtl.from(".navbar h2",{
    duration: 1,
    delay:0.5,
    y:-20,
    opacity:0
})
navtl.from(".navbar ul li",{
    duration: 1,
    stagger:0.2,
    y:-20,
    opacity:0
})

// animations for landing page



var landingTL =gsap.timeline()

landingTL.from(".page-heading",{
    duration: 1,
    delay:0.5,
    y:-20,
    opacity:0
})

landingTL.from(".hero p",{
    color:"#111",
    duration: 1,
    opacity:0,
    y:20
})
landingTL.from(".hero a",{
    color:"#111",
    opacity:0,
    y:20
})


// about us animation
gsap.from(".about h2",{
    duration:1,
    opacity:0,
    y:20,
    scrollTrigger:{
        trigger:".about",
        // markers:true,
        start:"top 85%",
        end:"top 50%", 
        scrub:true,
    }
})
gsap.from(".about-us-container p",{
    duration:1.5,
    opacity:0,
    x:-50,
    scrollTrigger:{
        trigger:".about-us-container p",
        scroller:"body",
        start:"top 85%",
        end:"top 50%", 
        scrub:true,
    }
})
gsap.from(".about-img",{
    duration:2,
    opacity:0,
    x:50,
    scrollTrigger:{
        trigger:".about-img",
        scroller:"body",
        start:"top 85%",
        end:"top 50%", 
        scrub:true,
    }
})

// ourstory
gsap.from(".para-box-left",{
    duration:1.5,
    opacity:0,
    y:50,
    scrollTrigger:{
        trigger:".para-box-left",
        scroller:"body",
        start:"top 85%",
        end:"top 50%", 
        scrub:true,
    }
})
gsap.from(".para-box-right",{
    duration:1.5,
    opacity:0,
    y:50,
    scrollTrigger:{
        trigger:".para-box-right",
        scroller:"body",
        start:"top 85%",
        end:"top 50%", 
        scrub:true,
    }
})

// contact animation
gsap.from(".contact-card p",{
    duration:1.5,
    opacity:0,
    x:-150,
    stagger:0.3,
    scrollTrigger:{
        trigger:".contact-card",
        scroller:"body",
        start:"top 85%",
        end:"top 70%", 
        scrub:true,
}})

// gallery 
gsap.from(".gallery-img:nth-child(1)",{
    duration:0.5,
    opacity:0,
    x:-100,
    scrollTrigger:{
        trigger:".gallery-img",
        scroller:"body",
        start:"top 80%",
        end:"top 60%", 
        scrub:true,
}})
gsap.from(".gallery-img:nth-child(3)",{
    duration:0.5,
    opacity:0,
    x:100,
    scrollTrigger:{
        trigger:".gallery-img:nth-child(3)",
        scroller:"body",
        start:"top 80%",
        end:"top 75%", 
        scrub:true,
}})

gsap.utils.toArray(".left").forEach((left)=>{
    gsap.from(left,{
        duration:0.5,
        x:100,
        opacity:0,
        scrollTrigger:{
            trigger:left,
            // markers:true,
            start:"top 80%",
            end:"top 60%",
            scrub:true,
        }
    })
})
gsap.utils.toArray(".right").forEach((right)=>{
    gsap.from(right,{
        duration:0.5,
        x:-100,
        opacity:0,
        scrollTrigger:{
            trigger:right,
            // markers:true,
            start:"top 80%",
            end:"top 60%",
            scrub:true,
        }
    })
})



