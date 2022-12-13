---
layout: page
title: "DayDreamer: World Models for Physical Robot Learning"
description: Hyper data-efficient robot learning with world models
img: assets/img/daydreamer_splash.png
importance: 1
category: work
---
### Authors
<a href="https://twitter.com/philippswu">Philipp Wu</a>\*, <a href="https://twitter.com/aleescontrela">Alejandro Escontrela</a>\*, <a href="https://danijar.com/">Danijar Hafner</a>\*, <a href="https://goldberg.berkeley.edu/">Ken Goldberg</a>, <a  href="https://people.eecs.berkeley.edu/~pabbeel/">Pieter Abbeel</a> (\* = equal authors)

## Publication info
<div class="publications">
{% bibliography -f papers -q @*[title=Daydreamer: World Models for Physical Robot Learning]* %}
</div>

## Learning to walk in the real world in under an hour

The A1 quadruped shown below learns to walk with DayDreamer in ~1 hour, from scratch, with no human intervention.


{% raw %}
<p style="position: relative; text-align: center; height: 0; padding-bottom: 56.25%; margin-bottom: 0;">
<iframe frameborder="0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; margin-bottom: -.5em" src="https://www.youtube-nocookie.com/embed/xAXvfVTgqr0?rel=0" allowfullscreen=""></iframe>
</p>
{% endraw %}


<br/>
<div class="row">
    <div class="text-center col-sm mt-3 mt-md-0">
        <h2><a href="https://arxiv.org/pdf/2206.14176.pdf">Paper</a></h2>
    </div>
    <div class="text-center col-sm mt-3 mt-md-0">
        <h2><a href="https://twitter.com/danijarh/status/1542170248706609152">Twitter</a></h2>
    </div>
    <div class="text-center col-sm mt-3 mt-md-0">
        <h2><a href="https://www.youtube.com/watch?v=A6Rg0qRwTYs">Talk</a></h2>
    </div>
    <div class="text-center col-sm mt-3 mt-md-0">
        <h2><a href="https://github.com/danijar/daydreamer">Code</a></h2>
    </div>
</div>

<br/>
<br/>
<div class="row justify-content-sm-center">
    <!-- <a href="#" class="btn btn-primary stretched-link">Go somewhere</a> -->
    <a href="https://www.dailymail.co.uk/sciencetech/article-11024615/Robot-dog-walk-ONE-hour-training-scientists-hope-play-fetch-future.html" class="col-sm-2 mt-3 mt-md-0">
        {% include figure.html path="assets/img/dailymail.png" title="example image" class="img-fluid" %}
    </a>
    <a href="https://www.technologyreview.com/2022/07/18/1056059/robot-dog-ai-reinforcement/" class="col-sm-2 mt-3 mt-md-0">
        {% include figure.html path="assets/img/mittechreview.png" title="example image" class="img-fluid" %}
    </a>
    <a href="https://techcrunch.com/2022/07/21/berkeley-shows-off-accelerated-learning-that-puts-robots-on-their-feet-in-minutes/" class="col-sm-2 mt-3 mt-md-0">
        {% include figure.html path="assets/img/techcrunch.png" title="example image" class="img-fluid" %}
    </a>
    <a href="https://techxplore.com/news/2022-07-daydreamer-algorithm-quickly-robots-behaviors.html" class="col-sm-2 mt-3 mt-md-0">
        {% include figure.html path="assets/img/techxplore.png" title="example image" class="img-fluid" %}
    </a>
</div>

## Abstract

To solve tasks in complex environments, robots need to learn from experience.
Deep reinforcement learning is a common approach to robot learning but requires
a large amount of trial and error to learn, limiting its deployment in the
physical world. As a consequence, many advances in robot learning rely on
simulators. On the other hand, learning inside of simulators fails to capture
the complexity of the real world, is prone to simulator inaccuracies, and the
resulting behaviors do not adapt to changes in the world. The Dreamer algorithm
has recently shown great promise for learning from small amounts of interaction
by planning within a learned world model, outperforming pure reinforcement
learning in video games. Learning a world model to predict the outcomes of
potential actions enables planning in imagination, reducing the amount of trial
and error needed in the real environment. However, it is unknown whether
Dreamer can facilitate faster learning on physical robots. In this paper, we
apply Dreamer to 4 robots to learn online and directly in the real world,
without any simulators. Dreamer trains a quadruped robot to roll off its back,
stand up, and walk from scratch and without resets in only 1 hour. We then push
the robot and find that Dreamer adapts within 10 minutes to withstand
perturbations or quickly roll over and stand back up. On two different robotic
arms, Dreamer learns to pick and place multiple objects directly from camera
images and sparse rewards, approaching human performance. On a wheeled robot,
Dreamer learns to navigate to a goal position purely from camera images,
automatically resolving ambiguity about the robot orientation. Using the same
hyperparameters across all experiments, we find that Dreamer is capable of
online learning in the real world, which establishes a strong baseline. We
release our infrastructure for future applications of world models to robot
learning.

## Robots

{% raw %}
<div class="embed-responsive embed-responsive-21by9">
<video autoplay="" muted="" loop=""><source src="/assets/vid/robots.mp4"></video>
</div>
{% endraw %}

## All Media Coverage

<ul>
  <li><a href="https://www.dailymail.co.uk/sciencetech/article-11024615/Robot-dog-walk-ONE-hour-training-scientists-hope-play-fetch-future.html">Daily Mail</a></li>
  <li><a href="https://www.technologyreview.com/2022/07/18/1056059/robot-dog-ai-reinforcement/">MIT Technology Review</a></li>
  <li><a href="https://techcrunch.com/2022/07/21/berkeley-shows-off-accelerated-learning-that-puts-robots-on-their-feet-in-minutes/">TechCrunch</a> (<a href="https://www.youtube.com/watch?v=h8AUJwPdTIE">Video</a>)</li>
  <li><a href="https://syncedreview.com/2022/07/04/learning-without-simulations-uc-berkeleys-daydreamer-establishes-a-strong-baseline-for-real-world-robotic-training/">Synced</a></li>
  <li><a href="https://singularityhub.com/2022/08/08/this-robot-dog-has-an-ai-brain-and-taught-itself-to-walk-in-just-an-hour/">SingularityHub</a></li>
  <li><a href="https://www.zmescience.com/science/robot-teaches-itself-to-walk-235242/">ZME Science</a></li>
  <li><a href="https://www.technology.org/2022/06/29/daydreamer-world-models-for-physical-robot-learning/">Technology Org</a></li>
  <li><a href="https://www.indiatimes.com/technology/science-and-future/robot-dog-taught-itself-how-to-walk-575118.html">India Times</a></li>
  <li><a href="https://analyticsindiamag.com/this-robot-used-dreamer-algorithm-to-learn-walking-in-60-minutes/">Analytics India Mag (AIM)</a></li>
  <li><a href="https://www.marktechpost.com/2022/07/05/uc-berkeley-researchers-use-a-dreamer-world-model-to-train-a-variety-of-real-world-robots-to-learn-from-experience/">MarkTechPost</a></li>
  <li><a href="https://news7g.com/daydreamer-world-model-for-learning-robot-physics/">NEWS7g</a></li>
  <li><a href="https://www.actuia.com/actualite/daydreamer-former-les-robots-dans-le-monde-reel-grace-a-lapprentissage-par-renforcement-en-ligne/">ActuIA</a></li>
  <li><a href="https://www.i-programmer.info/news/105-artificial-intelligence/15646-robot-dog-from-rolling-on-floor-to-walking-in-1-hour.html">I Programmer</a></li>
  <li><a href="https://engineering.berkeley.edu/news/2022/10/step-by-step/">Berkeley Engineering</a></li>
</ul>


## Acknowledgements
We thank <a href="https://stepjam.github.io/">Stephen James</a> and <a href="https://kerrj.github.io/">Justin Kerr</a> for helpful suggestions and help with
printing the protective shell of the quadruped robot. We thank <a href="https://www.linkedin.com/in/ademi-adeniji">Ademi Adeniji</a> for help with setting up
the XArm robot and <a href="https://twitter.com/ravenhuang4?lang=en">Raven Huang</a> for help with setting up the UR5 robot. This work was supported
in part by an NSF Fellowship, NSF NRI #2024675, and the Vanier Canada Graduate Scholarship.
