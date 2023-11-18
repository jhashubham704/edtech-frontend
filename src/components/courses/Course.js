import React from 'react'
import Nav from '../nav/Nav'
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Course.css' ; 

export default function Course() {
   
  const user = [ 
    { 
        "id": "a1" ,
        "title" : "Learn Java" ,
       "link" : "https://mindworks.org/blog/how-meditation-changes-the-brain/" ,
        "discription" : "Did you know that simply sitting and breathing mindfully can significantly change the brain?" ,
        "poster" : "https://picsum.photos/seed/picsum/200/300"
    } ,

   { 
       "id": "a2" ,
       "title" : "Learn HTML/CSS" ,
        "link" : "https://mindworks.org/blog/benefits-meditation-mind-body/" ,
        "discription" : "Our minds and our bodies are connected. If we’re unhappy for an extended time, our bodies become weaker and more susceptible to illness." ,
         "poster" : "https://picsum.photos/seed/picsum/200/300"
     } ,

     { 
        
       "id": "a3" ,
       "title" : "Learn React JS" ,
       "link" : "https://mindworks.org/blog/opening-heart-love/" ,
        "discription" : "4 Heart Practices Meditation I think when I first came to practice, probably for the first couple years, I sat there and I thought about meditation" ,
        "poster" : "https://picsum.photos/seed/picsum/200/300"

     },

    { 
        "id": "a4" ,
         "title" : "Learn MongoDB" ,
         "link" : "https://mindworks.org/blog/what-is-spiritual-meditation/" ,
        "discription" : "At its core, spiritual meditation is the mindful practice of connection to something that is greater, vaster, and deeper than the individual self. It may seem paradoxical, but the path to that connection passes through honest self-reflection" ,
        "poster" : "https://picsum.photos/seed/picsum/200/300"
    },

    { 
         "id": "a5" ,
         "title" : "What is This Thing We Call Self?" ,
         "link" : "https://mindworks.org/blog/what-is-this-thing-we-call-self/" ,
         "discription" : "We know from our experience that everything is always changing. We wake up in the morning feeling one way, but what we think and feel an hour later is very different" ,
        "poster" : "https://picsum.photos/seed/picsum/200/300"
    }
]

  return (
    <div>
        <div className='courses-heading'><h2>Our Courses</h2></div>
    <div className='courses-container'>
        {
      user.map((item)=>{ 
        return(
          <div className='course-card'>
                <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="130"
            image= {item.poster}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {item.discription}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={item.link}>
            <a href={item.link}>Read more</a>
          </Button>
        </CardActions>
      </Card>
          </div>
    
        )
      })
        }
    </div>
      
    </div>
  )
}
