import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss'],
})
export class MentorsComponent implements OnInit {
  posts = [
    {
      gravity: 'south',
      title: 'Siddharth Jaidka',
      description:
        '4+ years of experience, Full Stack Engineer at QuillBot. Worked with TekSystems, TrustSearch.',
      image: 'url(assets/img/mentors/jaidka.jpg)',
    },
    {
      gravity: 'south',
      title: 'Aashis Kumar',
      description:
        '2+ years of experience, Software Engineer at QuillBot. Worked with Internshala.',
      image: 'url(assets/img/mentors/aashis.jpg)',
    },
    {
      gravity: 'south',
      title: 'Sarvagya Singh',
      description:
        '2+ years of experience with Python, has worked as Data Science Engineer with Sensegrass Inc. and Autobot India',
      image: 'url(assets/img/mentors/sarvagya.jpg)',
    },
    {
      gravity: 'east',
      title: 'Kabir Nagpal',
      description:
        'A community enthusiast, 2+ years of experience in Python, has worked with Stir Research Tech as a Researcher',
      image: 'url(assets/img/mentors/kabir.jpg)',
    },
    {
      gravity: 'north',
      title: 'Ananya Smriti',
      description:
        '2+ years in C++, Web Developer at TechProdigy, currently working on an International Mars Rover Project',
      image: 'url(assets/img/mentors/ananya.jpg)',
    },
    {
      gravity: 'north',
      title: 'Shivansh Aggarwal',
      description:
        'Researcher at Institute of Aerospace Technology, HSB Germany in Design & Optimization of Aerospace Tech',
      image: 'url(assets/img/mentors/shivansh.jpg)',
    },
    {
      gravity: 'north',
      title: 'Srikanth Kuppili',
      description:
        'Certified with DeepLearning.ai, a Machine Learning enthusiast, worked with FortyFourHz.',
      image: 'url(assets/img/mentors/srikanth.jpg)',
    },
    {
      gravity: 'north',
      title: 'Tarush Gupta',
      description:
        '2+ years in IoT, has been working with different companies for Design and IoT like The Blog Event.',
      image: 'url(assets/img/mentors/tarush.jpg)',
    },
    {
      gravity: 'north',
      title: 'Mahainn Somani',
      description:
        '2+ years in C++, An MUN enthusiast, won best delegate awards. Worked at Abyeti Tech and Urban Campus.',
      image: 'url(assets/img/mentors/mahainn.jpg)',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
