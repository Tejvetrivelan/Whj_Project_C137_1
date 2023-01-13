function draw()
{
    image(img, 0, 0, 640, 420);
    if(status != "")
    {
       for(i = 0; i < object.length; i++)
       {
        document.getElementById("status").innerHTML = "status object dectated";
        fill("#FF0000");
        percentage = floor(object[i].confidence * 100);
        text(object[i].label + " " + percentage + "%", object[i].x + 15,object[i].y + 15);
        noFill();
        stroke("#FF0000");
        rect(object[i].x, object[i].y, object[i].width, object[i].height);
       }
    }
    
}