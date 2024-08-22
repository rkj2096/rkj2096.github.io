---
layout: post
title: Have you commit secrets in a git repo?
image: '/assets/images/secrets.png'
category: git
---

Oops, I just committed my API key to GitHub—every developer's rite of passage! If you're a newbie who’s just experienced this, welcome to the club! Don't worry, it happens to the best of us, but now it's time to fix that little slip-up before you start polishing your resume. It happened to me when I started working on my first real project called Tapestry Pooling. I had committed a SendGrid API key to a GitHub repo.

Step one: Panic. Just kidding—no panicking! What you actually need to do first is ensure that the secret is useless to anyone who might have seen it. If it’s an API key, delete or regenerate it. If it’s a password, change it faster than you can say, "Oh no!"

Next, it’s time to erase all evidence from the scene of the crime—aka your repo history. The BFG Repo-Cleaner is your new best friend. It’s like a time machine that helps you rewrite history, removing those secrets from your Git history as if they never existed. You can learn how to wield this powerful tool here: BFG Repo-Cleaner.

If your code is on GitHub, there's one more thing you need to do. GitHub is like an elephant—it never forgets, especially when it comes to pull request refs. You’ll need to reach out to GitHub support and politely ask them to scrub those PR refs clean. Be nice; they hold the keys to your repo’s past!

Remember, it's not the mistake that defines you—it's how quickly you can clean up after it. And hey, after this, you'll have a great story to share with fellow developers.


Next may be you want to learn how to handler secerts. 
