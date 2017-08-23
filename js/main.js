// A $( document ).ready() block.
$( document ).ready(function() {
    clearList();
    $(".results").show().append(getKPparagraph());
    $(".results").show().append(getKPparagraph());
    $(".results").show().append(getKPparagraph());
    $(".results").show().append(getKPparagraph());
});

$(function() {
 var el, newPoint, newPlace, offset;
 
 // Select all range inputs, watch for change
 $("input[type='range']").change(function() {
 
   // Cache this for efficiency
   el = $(this);
   
   // Measure width of range input
   width = el.width();
   
   // Figure out placement percentage between left and right of input
   newPoint = (el.val() - el.attr("min")) / (el.attr("max") - el.attr("min"));
   
   // Janky value to get pointer to line up better
   // offset = -2;
   
   // Prevent bubble from going beyond left or right (unsupported browsers)
   if (newPoint < 0) { newPlace = 0; }
   else if (newPoint > 1) { newPlace = width; }
   else { newPlace = width * newPoint + offset; offset -= newPoint; }
   
   // Move bubble
   el
     .next("output")
     .css({
       left: newPlace,
       marginLeft: offset + "%"
     })
     .text(el.val());
 })
 // Fake a change to position bubble at page load
 .trigger('change');


});

var KPLyrics = [
    //TEENAGE DREAM

    //TEENAGE DREAM
    "You think I'm pretty without any makeup on."
    ,"You think I'm funny when I tell the punchline wrong."
    ,"I know you get me so I let my walls come down, down."
    ,"Before you met me I was alright but things were kinda heavy."
    ,"You brought me to life, now every February you'll be my Valentine, Valentine."
    ,"Let's go all the way tonight, no regrets, just love."
    ,"We can dance, until we die, you and I, will be young forever."
    ,"You make me feel like I'm livin' a teenage dream, the way you turn me on"
    ,"I can't sleep let's run away and don't ever look back, don't ever look back."
    ,"My heart stops when you look at me just one touch now baby I believe."
    ,"This is real so take a chance and don't ever look back, don't ever look back."
    ,"We drove to Cali and got drunk on the beach."
    ,"Got a motel and built a fort out of sheets."
    ,"I finally found you my missing puzzle piece, I'm complete."
    ,"I'm ma get your heart racing in my skin-tight jeans."
    ,"Be your teenage dream tonight."
    ,"Let you put your hands on me in my skin-tight jeans."
    ,"Be your teenage dream tonight."
    
    //LAST FRIDAY NIGHT (T.G.I.F.)
    ,"There's a stranger in my bed, there's a pounding in my head."
    ,"Glitter all over the room pink flamingos in the pool."
    ,"I smell like a minibar, DJ's passed out in the yard."
    ,"Barbie's on the barbeque, this a hickie or a bruise?"
    ,"Pictures of last night ended up online I'm screwed, Oh well."
    ,"It's a blacked out blur, but I'm pretty sure it ruled. Damn."
    ,"Last Friday night."
    ,"Yeah, we danced on tabletops and we took too many shots."
    ,"Think we kissed but I forgot."
    ,"Yeah, we maxed our credit cards and got kicked out of the bar."
    ,"So we hit the boulevard."
    ,"Last Friday night we went streaking in the park."
    ,"Skinny dipping in the dark, then had a ménage à trois."
    ,"Last Friday night, yeah I think we broke the law, always say we're gonna stop."
    ,"This Friday night, do it all again."
    ,"Trying to connect the dots, don't know what to tell my boss."
    ,"Think the city towed my car, chandeliers on the floor."
    ,"Ripped my favorite party dress, warrant's out for my arrest."
    ,"Think I need a ginger ale, that was such an epic fail."
    
    //CALIFORNIA GURLS
    ,"Greetings loved ones let's take a journey."
    ,"I know a place where the grass is really greener."
    ,"Warm, wet and wild there must be something in the water."
    ,"Sippin' gin and juice laying underneath the palm trees."
    ,"The boys break their necks try'na to creep a little sneak peek."
    ,"You could travel the world but nothing comes close to the golden coast."
    ,"Once you party with us you'll be falling in love, Oooooh Oh Oooooh!"
    ,"California girls we're unforgettable."
    ,"Daisy Dukes, bikinis on top."
    ,"Sun-kissed skin so hot we'll melt your popsicle."
    ,"California girls we're undeniable."
    ,"Fine, fresh, fierce, we got it on lock."
    ,"West coast represent now put your hands up!"
    ,"Sex on the beach, we don't mind sand in our stilettoes."
    ,"We freak in my jeep, Snoop Doggy Dogg on the stereo."
    ,"Tone, tan fit and ready, turn it up cause its gettin' heavy."
    ,"Wild wild west coast, hese are the girls I love the most."
    ,"I mean the ones, I mean like she's the one."
    ,"Kiss her, touch her, squeeze her buns."
    ,"The girl's a freak, she drive a jeep in Laguna Beach."
    ,"I'm okay. I won't play. I love the bay, just like I love LA."
    ,"Venice beach and Palm Springs, summertime is everything."
    ,"Homeboys bangin' out. All that ass hangin' out."
    ,"Bikinis, zucchinis, Martinis, no weenies."
    ,"Just the King and the Queeny."
    ,"Katy my lady, lookie here baby, I'm all up on ya, cuz you're representin' California."

    //FIREWORK
    ,"Do you ever feel like a plastic bag."
    ,"Drifting through the wind, wanting to start again?"
    ,"Do you ever feel, feel so paper thin."
    ,"Like a house of cards, one blow from caving in?"
    ,"Do you ever feel already buried deep six feet under?"
    ,"Screams but no one seems to hear a thing."
    ,"Do you know that there's still a chance for you 'Cause there's a spark in you?"
    ,"You just gotta ignite the light and let it shine."
    ,"Just own the night like the 4th of July."
    ,"'Cause, baby, you're a firework."
    ,"Come on, show 'em what you're worth."
    ,"Make 'em go, 'Aah, aah, aah' as you shoot across the sky-y-y!"
    ,"Baby, you're a firework."
    ,"Come on, let your colours burst."
    ,"You don't have to feel like a wasted space."
    ,"You're original, cannot be replaced."
    ,"If you only knew what the future holds."
    ,"After a hurricane comes a rainbow."
    ,"Maybe a reason why all the doors are closed."
    ,"So you could open one that leads you to the perfect road."
    ,"Like a lightning bolt, your heart will glow and when it's time you'll know."
    ,"You just gotta ignite the light and let it shine!"
    ,"Just own the night like the 4th of July!"
    ,"Boom, boom, boom."
    ,"Even brighter than the moon, moon, moon."
    ,"It's always been inside of you, you, you."
    ,"And now it's time to let it through-ough-ough"
    
    //PEACOCK
    ,"I wanna see your peacock, cock, cock, your peacock, cock."
    ,"Your peacock, cock, cock your peacock."
    ,"Word on the street, you got somethin' to show me, me."
    ,"Magical, colorful, Mr. Mystery, ee."
    ,"I'm intrigued, for a peek, heard it's fascinating."
    ,"Come on baby let me see."
    ,"What you're hidin' underneath."
    ,"What's up your sleeve, such a tease."
    ,"Wanna see the show in 3D, a movie."
    ,"Heard it's beautiful, be the judge and my girls gonna take a vote."
    ,"I want the jaw droppin', eye poppin', head turnin', body shockin'."
    ,"I want my heart throbbin', ground shakin', show stoppin', amazin'."
    ,"Are you brave enough to let me see your peacock?"
    ,"Don't be a chicken boy, stop acting like a bitch."
    ,"I'm a peace out if you don't give me the pay off."
    ,"What you're waiting for, it's time for you to show it off."
    ,"Don't be a shy kinda guy I'll bet it's beautiful."
    ,"Skip the talk, heard it all, time to walk the walk."
    ,"Break me off, if you bad, show me who's the boss."
    ,"Need some goose, to get loose, come on take a shot."
    ,"Oh my God no exaggeration."
    ,"Boy all this time was worth the waiting."
    ,"I just shed a tear."
    ,"I am so unprepared."
    ,"You got the finest architecture."
    ,"End of the rainbow looking treasure."
    ,"Such a sight to see and it's all for me."

    //CIRCLE THE DRAIN
    ,"This is the last time you say, after the last line you break."
    ,"It's not even a holiday, nothing to celebrate."
    ,"You give a hundred reasons why, and you say you're really gonna try."
    ,"If I had a nickel for everytime, I'd own the bank."
    ,"Thought that I was the exception."
    ,"I could have rewrite your addiction."
    ,"You could've been the greatest."
    ,"But you'd rather get wasted."
    ,"You fall asleep during foreplay, 'Cause the pills you take, are more your forte."
    ,"I'm not sticking around to watch you go down."
    ,"Wanna be your lover, not your fucking' mother."
    ,"Can't be your savior, I don't have the power."
    ,"I'm not gonna stay and watch you circle the drain."
    ,"Watch you circle the drain."
    ,"You say you have to write your rhymes, whatever helps you sleep at night."
    ,"You've become what you despise, a stereotype."
    ,"You think you're so rock and roll, but you're really just a joke."
    ,"Had the world in the palm of your hands."
    ,"But you fucking choked."
    ,"Should've been my team mate, could've changed your fate."
    ,"You say that you love me, you won't remember in the morning."

    //THE ONE THAT GOT AWAY
    ,"Summer after high school when we first met."
    ,"We'd make out in your Mustang to Radiohead."
    ,"And on my 18th Birthday we got matching tattoos."
    ,"Used to steal your parents' liquor and climb to the roof."
    ,"Talk about our future like we had a clue."
    ,"Never planned that one day I'd be losing you."
    ,"In another life I would be your girl."
    ,"We'd keep all our promises be us against the world."
    ,"In another life I would make you stay."
    ,"So I don't have to say you were the one that got away."
    ,"The one that got away."
    ,"I was June and you were my Johnny Cash."
    ,"Never one without the other, we made a pact."
    ,"Sometimes when I miss you I put those records on."
    ,"Someone said you had your tattoo removed."
    ,"Saw you downtown singing the Blues."
    ,"It's time to face the music I'm no longer your muse."
    ,"But in another life I would be your girl."
    ,"We'd keep all our promises be us against the world."
    ,"All this money can't buy me a time machine."
    ,"Can't replace you with a million rings."
    ,"I should've told you what you meant to me 'Cause now I pay the price."

    //E.T.
    ,"You're so hypnotizing, could you be the devil? Could you be an angel?"
    ,"Your touch magnetizing, feels like I am floating, leaves my body glowing."
    ,"They say, be afraid you're not like the others, futuristic lover."
    ,"Different DNA, they don't understand you."
    ,"You're from a whole 'nother world, different dimension."
    ,"You open my eyes and I'm ready to go, lead me into the light."
    ,"Kiss me, ki-ki-kiss me."
    ,"Infect me with your love and fill me with your poison."
    ,"Take me, ta-ta-take me."
    ,"Wanna be a victim ready for abduction."
    ,"Boy, you're an alien your touch so foreign, it's supernatural, extraterrestrial."
    ,"You're so supersonic, wanna feel your powers, stun me with your lasers."
    ,"Your kiss is cosmic, every move is magic."
    ,"This is transcendental, on another level, boy, you're my lucky star."
    ,"I wanna walk on your wave length and be there when you vibrate"
    ,"For you I'll risk it all, all."

    //WHO AM I LIVING FOR
    ,"Yeah eh yeah yeah."
    ,"I can feel a phoenix inside of me."
    ,"As I march alone to a different beat."
    ,"Slowly swallowing down my fear, yeah yeah."
    ,"I am ready for the road less traveled."
    ,"Suiting up for my crowning battle."
    ,"This test is my own cross to bare."
    ,"But I will get there."
    ,"It's never easy to be chosen, never easy to be called."
    ,"Standing on the frontline when the bombs start to fall."
    ,"I can see the heavens but I still hear the flames."
    ,"Calling out my name."
    ,"I can see the writing on the wall."
    ,"I can't ignore this war."
    ,"At the eh-end of it all."
    ,"Who am I living for?."
    ,"I can feel this light that's inside of me."
    ,"Growing fast into a bolt of lightning."
    ,"I know one spark will shock the world, yeah yeah."
    ,"So I pray for a favour like Esther."
    ,"I need your strength to handle the pressure."
    ,"I know there will be sacrifice but that's the price."
    ,"Heavy is the head that wears the crown."
    ,"Don't let the greatness get you down."
    ,"Heavy is the head that wears the crown."
    ,"Don't let the greatness get you down, oh, oh yeah."
    
    //Roar
    
    //Roar
    ,"I used to bite my tongue and hold my breath."
    ,"Scared to rock the boat and make a mess."
    ,"So I sat quietly, agreed politely."
    ,"I guess that I forgot I had a choice."
    ,"I let you push me past the breaking point."
    ,"I stood for nothing, so I fell for everything."
    ,"You held me down, but I got up (HEY!)."
    ,"Already brushing off the dust."
    ,"You hear my voice, you hear that sound."
    ,"Like thunder gonna shake the ground."
    ,"Get ready 'cause I’ve had enough."
    ,"I see it all, I see it now."
    ,"I got the eye of the tiger, a fighter, dancing through the fire."
    ,"'Cause I am a champion and you’re gonna hear me roar louder, louder than a lion."
    ,"'Cause I am a champion and you’re gonna hear me roar."
    ,"Oh oh oh oh oh oh, Oh oh oh oh oh oh."
    ,"You’re gonna hear me roar."
    ,"Now I’m floating like a butterfly."
    ,"Stinging like a bee I earned my stripes."
    ,"I went from zero, to my own hero."
    
    //Legendary Lovers
    
    //Birthday
    ,"I heard you're feeling nothing's going right."
    ,"Why don't you let me stop by?"
    ,"The clock is ticking, running out of time. So we should party all night."
    ,"So cover your eyes, I have a surprise."
    ,"I hope you got a healthy appetite."
    ,"If you wanna dance, if you want it all, you know that I'm the girl that you should call."
    ,"Boy, when you're with me I'll give you a taste."
    ,"Make it like your birthday everyday."
    ,"I know you like it sweet."
    ,"So you can have your cake."
    ,"Give you something good to celebrate."
    ,"So make a wish, I'll make it like your birthday everyday."
    ,"I'll be your gift, give you something good to celebrate."
    ,"Pop your confetti."
    ,"Pop your Pérignon."
    ,"So hot and heavy, 'Til dawn."
    ,"I got you spinning like a disco ball."
    ,"All night they're playing, your song."
    ,"We're living the life. We're doing it right."
    ,"You're never gonna be unsatisfied."
    ,"If you wanna dance."
    ,"If you want it all."
    ,"You know that I'm the girl that you should call."
    ,"Happy birthday."
    ,"So let me get you in your birthday suit."
    ,"It's time to bring out the big balloons."
    ,"So let me get you in your birthday suit."
    ,"It's time to bring out the big, big, big, big, big, big balloons."
    
    //Walking on air
    ,"Tonight, tonight, tonight, I'm walking on air."
    ,"You're giving me sweet, sweet ecstasy."
    ,"Yeah, you take me to utopia."
    ,"You're reading me like erotica, boy, you make me feel exotic, yeah."
    ,"Just when I think I can't take anymore."
    ,"We go deeper and harder than ever before."
    ,"We go higher and higher."
    ,"I feel like I'm already there."
    ,"I'm walking on air (tonight)."
    ,"I'm walking on air."
    ,"I'm walking, I'm walking on air (tonight)."
    ,"This is pure paradise, even heaven is jealous of our love."
    ,"Yes, we make angels cry, raining down on earth from up above."
    ,"Heaven is jealous of our love, angels are crying from up above."
    
    //Unconditionally
    ,"Oh no, did I get too close?"
    ,"Oh, did I almost see what's really on the inside?"
    ,"All your insecurities."
    ,"All the dirty laundry."
    ,"Never made me blink one time."
    ,"Unconditional, unconditionally."
    ,"I will love you unconditionally."
    ,"There is no fear now, let go and just be free, I will love you unconditionally."
    ,"Come just as you are to me."
    ,"Don't need apologies."
    ,"Know that you are worthy."
    ,"I'll take your bad days with your good."
    ,"Walk through the storm I would."
    ,"I do it all because I love you, I love you."
    ,"So open up your heart and just let it begin."
    ,"Open up your heart and just let it begin."
    ,"Open up your heart."
    ,"Acceptance is the key to be to be truly free."
    ,"Will you do the same for me?"
    ,"'Cause I will love you unconditionally (oh yeah)."
    
    //Dark Horse
    ,"Oh, no."
    ,"Ya'll know what it is, Katy Perry, Juicy J, aha. Let's rage."
    ,"I knew you were."
    ,"You were gonna come to me."
    ,"And here you are."
    ,"But you better choose carefully."
    ,"‘Cause I, I’m capable of anything."
    ,"Of anything and everything."
    ,"Make me your Aphrodite."
    ,"Make me your one and only."
    ,"But don’t make me your enemy, your enemy, your enemy."
    ,"So you wanna play with magic."
    ,"Boy, you should know what you're falling for."
    ,"Baby do you dare to do this?"
    ,"Cause I’m coming at you like a dark horse."
    ,"Are you ready for, ready for."
    ,"A perfect storm, perfect storm."
    ,"Cause once you’re mine, once you’re mine."
    ,"There’s no going back."
    ,"Mark my words."
    ,"This love will make you levitate."
    ,"Like a bird."
    ,"Like a bird without a cage."
    ,"But down to earth."
    ,"If you choose to walk away, don’t walk away."
    ,"It’s in the palm of your hand now baby."
    ,"It’s a yes or no, no maybe."
    ,"So just be sure before you give it all to me."
    ,"All to me, give it all to me."
    ,"Uh, She’s a beast. I call her Karma (come back)."
    ,"She eats your heart out. Like Jeffrey Dahmer (woo)."
    ,"Be careful Try not to lead her on Shorty’s heart is on steroids, 'cause her love is so strong."
    ,"You may fall in love when you meet her."
    ,"If you get the chance you better keep her."
    ,"She's sweet as pie but if you break her heart."
    ,"She'll turn cold as a freezer."
    ,"That fairy tale ending with a knight in shining armor."
    ,"She can be my Sleeping Beauty."
    ,"I’m gon’ put her in a coma."
    ,"Woo!"
    ,"Woo!"
    ,"Woo!"
    ,"Damn I think I love her."
    ,"Shorty so bad, I’m sprung and I don’t care."
    ,"She ride me like a roller coaster."
    ,"Turned the bedroom into a fair (a fair!)"
    ,"Her love is like a drug."
    ,"I was tryna hit it and quit it."
    ,"But lil' mama so dope."
    ,"I messed around and got addicted."
    
    //This is how we do
    ,"This is how we do, This is how we do."
    ,"Oh oh!"
    ,"Sipping on Rosé, Silver Lake sun, coming up all lazy."
    ,"(This is how we do)"
    ,"(This is how we do)"
    ,"(This is how we do)"
    ,"Slow cooking pancakes for my boy, still up, still fresh as a Daisy."
    ,"Playing ping pong all night long, everything's all neon and hazy."
    ,"Chanel this, Chanel that, hell yeah."
    ,"All my girls vintage Chanel baby."
    ,"It's no big deal, it's no big deal, it's no big deal."
    ,"This is no big deal."
    ,"This is how we do, yeah, chilling, laid back."
    ,"Straight stuntin' yeah we do it like that."
    ,"This is how we do, do do do do, this is how we do."
    ,"Big hoops, and maroon lips, my clique hoppin' in my Maserati."
    ,"Santa Barbara, chique, at La Super Rica, grabbing tacos, checking out hotties."
    ,"Now we talking astrology, getting our nails did, all Japanese-y."
    ,"Day drinking at the Wildcats, sucking real bad at Mariah Carey-oke."
    ,"This one goes out to the ladies at breakfast in last night's dress."
    ,"Uh-huh, I see you."
    ,"Yo, this goes out to all you kids that still have their cars at the club valet and it's Tuesday."
    ,"Yo, shout out to all you kids, buying bottle service, with your rent money."
    ,"Respect."
    ,"Respect."
    ,"Respect."
    ,"What? Wait. No, no, no, no."
    ,"Bring the beat back."
    
    //International Smile
    ,"Flowers in her hair, she don't care."
    ,"Peach-pink lips, yeah, everybody stares."
    ,"You think you've seen her in a magazine."
    ,"It's like she walked right out of your dreams."
    ,"Black ray-bans, you know she's with the band."
    ,"Passport stamps, she's cosmopolitan."
    ,"Yeah, she runs the place like Penny lane."
    ,"Yeah, you're lucky if you're on her plane."
    ,"From Tokyo to Mexico, to Rio."
    ,"That girl’s a trip, A one way ticket."
    ,"Takes you miles high, so high, 'cause she’s got that one international smile."
    ,"Catch her if you can."
    ,"Yeah, she's so in demand."
    ,"She's got that, je ne sais quoi, you know it."
    ,"So très chic, yeah, she's a classic."
    ,"Yeah, she's footloose and so fancy free."
    ,"Yeah, she dances to her own beat."
    ,"'Cause she's the muse and the artist."
    ,"Always leaves a trail of stardust."
    ,"'Cause she's a little bit of Yoko, And she's a little bit of 'Oh no'."
    ,"From LA, Miami, to New York City."
    ,"That girl’s a trip, a one way ticket."
    ,"Please fasten your seat belts and make sure your champagne glasses are empty."
    ,"We are now approaching the runway, so get ready for take off."
    ,"She's got that international smile, oh yeah, she's got that one international smile."

];

var KPLyricsSFW = [
    //TEENAGE DREAM
    "You think I'm pretty without any makeup on."
    ,"You think I'm funny when I tell the punchline wrong."
    ,"I know you get me so I let my walls come down, down."
    ,"Before you met me I was alright but things were kinda heavy."
    ,"You brought me to life, now every February you'll be my Valentine, Valentine."
    ,"Let's go all the way tonight, no regrets, just love."
    ,"We can dance, until we die, you and I, will be young forever."
    ,"You make me feel like I'm livin' a teenage dream, the way you turn me on"
    ,"I can't sleep let's run away and don't ever look back, don't ever look back."
    ,"My heart stops when you look at me just one touch now baby I believe."
    ,"This is real so take a chance and don't ever look back, don't ever look back."
    ,"We drove to Cali and got drunk on the beach."
    ,"Got a motel and built a fort out of sheets."
    ,"I finally found you my missing puzzle piece, I'm complete."
    ,"I'm ma get your heart racing in my skin-tight jeans."
    ,"Be your teenage dream tonight."
    ,"Let you put your hands on me in my skin-tight jeans."
    ,"Be your teenage dream tonight."
    
    //LAST FRIDAY NIGHT (T.G.I.F.)
    ,"There's a stranger in my bed, there's a pounding in my head."
    ,"Glitter all over the room pink flamingos in the pool."
    ,"Last Friday night."
    ,"Yeah, we maxed our credit cards and got kicked out of the bar."
    ,"So we hit the boulevard."
    ,"Last Friday night, yeah I think we broke the law, always say we're gonna stop."
    ,"This Friday night, do it all again."
    ,"Trying to connect the dots, don't know what to tell my boss."
    ,"Think the city towed my car, chandeliers on the floor."
    ,"Ripped my favorite party dress, warrant's out for my arrest."
    ,"Think I need a ginger ale, that was such an epic fail."
    
    //CALIFORNIA GURLS
    ,"Greetings loved ones let's take a journey."
    ,"I know a place where the grass is really greener."
    ,"Warm, wet and wild there must be something in the water."
    ,"Sippin' gin and juice laying underneath the palm trees."
    ,"The boys break their necks try'na to creep a little sneak peek."
    ,"You could travel the world but nothing comes close to the golden coast."
    ,"Once you party with us you'll be falling in love, Oooooh Oh Oooooh!"
    ,"California girls we're unforgettable."
    ,"Daisy Dukes, bikinis on top."
    ,"Sun-kissed skin so hot we'll melt your popsicle."
    ,"California girls we're undeniable."
    ,"Fine, fresh, fierce, we got it on lock."
    ,"West coast represent now put your hands up!"
    ,"We freak in my jeep, Snoop Doggy Dogg on the stereo."
    ,"Tone, tan fit and ready, turn it up cause its gettin' heavy."
    ,"Wild wild west coast, hese are the girls I love the most."
    ,"I mean the ones, I mean like she's the one."
    ,"Kiss her, touch her, squeeze her buns."
    ,"The girl's a freak, she drive a jeep in Laguna Beach."
    ,"I'm okay. I won't play. I love the bay, just like I love LA."
    ,"Venice beach and Palm Springs, summertime is everything."
    ,"Homeboys bangin' out. All that ass hangin' out."
    ,"Bikinis, zucchinis, Martinis, no weenies."
    ,"Just the King and the Queeny."
    ,"Katy my lady, lookie here baby, I'm all up on ya, cuz you're representin' California."

    //FIREWORK
    ,"Do you ever feel like a plastic bag."
    ,"Drifting through the wind, wanting to start again?"
    ,"Do you ever feel, feel so paper thin."
    ,"Like a house of cards, one blow from caving in?"
    ,"Do you ever feel already buried deep six feet under?"
    ,"Screams but no one seems to hear a thing."
    ,"Do you know that there's still a chance for you 'Cause there's a spark in you?"
    ,"You just gotta ignite the light and let it shine."
    ,"Just own the night like the 4th of July."
    ,"'Cause, baby, you're a firework."
    ,"Come on, show 'em what you're worth."
    ,"Make 'em go, 'Aah, aah, aah' as you shoot across the sky-y-y!"
    ,"Baby, you're a firework."
    ,"Come on, let your colours burst."
    ,"You don't have to feel like a wasted space."
    ,"You're original, cannot be replaced."
    ,"If you only knew what the future holds."
    ,"After a hurricane comes a rainbow."
    ,"Maybe a reason why all the doors are closed."
    ,"So you could open one that leads you to the perfect road."
    ,"Like a lightning bolt, your heart will glow and when it's time you'll know."
    ,"You just gotta ignite the light and let it shine!"
    ,"Just own the night like the 4th of July!"
    ,"Boom, boom, boom."
    ,"Even brighter than the moon, moon, moon."
    ,"It's always been inside of you, you, you."
    ,"And now it's time to let it through-ough-ough"
    
    //PEACOCK
    ,"Word on the street, you got somethin' to show me, me."
    ,"Magical, colorful, Mr. Mystery, ee."
    ,"I'm intrigued, for a peek, heard it's fascinating."
    ,"Come on baby let me see."
    ,"What you're hidin' underneath."
    ,"What's up your sleeve, such a tease."
    ,"Wanna see the show in 3D, a movie."
    ,"Heard it's beautiful, be the judge and my girls gonna take a vote."
    ,"I want the jaw droppin', eye poppin', head turnin', body shockin'."
    ,"I want my heart throbbin', ground shakin', show stoppin', amazin'."
    ,"Are you brave enough to let me see your peacock?"
    ,"I'm a peace out if you don't give me the pay off."
    ,"What you're waiting for, it's time for you to show it off."
    ,"Don't be a shy kinda guy I'll bet it's beautiful."
    ,"Skip the talk, heard it all, time to walk the walk."
    ,"Break me off, if you bad, show me who's the boss."
    ,"Need some goose, to get loose, come on take a shot."
    ,"Oh my God no exaggeration."
    ,"Boy all this time was worth the waiting."
    ,"I just shed a tear."
    ,"I am so unprepared."
    ,"You got the finest architecture."
    ,"End of the rainbow looking treasure."
    ,"Such a sight to see and it's all for me."

    //CIRCLE THE DRAIN
    ,"This is the last time you say, after the last line you break."
    ,"It's not even a holiday, nothing to celebrate."
    ,"You give a hundred reasons why, and you say you're really gonna try."
    ,"If I had a nickel for everytime, I'd own the bank."
    ,"Thought that I was the exception."
    ,"I could have rewrite your addiction."
    ,"You could've been the greatest."
    ,"But you'd rather get wasted."
    ,"You fall asleep during foreplay, 'Cause the pills you take, are more your forte."
    ,"I'm not sticking around to watch you go down."
    ,"Can't be your savior, I don't have the power."
    ,"I'm not gonna stay and watch you circle the drain."
    ,"Watch you circle the drain."
    ,"You say you have to write your rhymes, whatever helps you sleep at night."
    ,"You've become what you despise, a stereotype."
    ,"You think you're so rock and roll, but you're really just a joke."
    ,"Had the world in the palm of your hands."
    ,"Should've been my team mate, could've changed your fate."
    ,"You say that you love me, you won't remember in the morning."

    //THE ONE THAT GOT AWAY
    ,"Summer after high school when we first met."
    ,"We'd make out in your Mustang to Radiohead."
    ,"And on my 18th Birthday we got matching tattoos."
    ,"Used to steal your parents' liquor and climb to the roof."
    ,"Talk about our future like we had a clue."
    ,"Never planned that one day I'd be losing you."
    ,"In another life I would be your girl."
    ,"We'd keep all our promises be us against the world."
    ,"In another life I would make you stay."
    ,"So I don't have to say you were the one that got away."
    ,"The one that got away."
    ,"I was June and you were my Johnny Cash."
    ,"Never one without the other, we made a pact."
    ,"Sometimes when I miss you I put those records on."
    ,"Someone said you had your tattoo removed."
    ,"Saw you downtown singing the Blues."
    ,"It's time to face the music I'm no longer your muse."
    ,"But in another life I would be your girl."
    ,"We'd keep all our promises be us against the world."
    ,"All this money can't buy me a time machine."
    ,"Can't replace you with a million rings."
    ,"I should've told you what you meant to me 'Cause now I pay the price."

    //E.T.
    ,"You're so hypnotizing, could you be the devil? Could you be an angel?"
    ,"Your touch magnetizing, feels like I am floating, leaves my body glowing."
    ,"They say, be afraid you're not like the others, futuristic lover."
    ,"Different DNA, they don't understand you."
    ,"You're from a whole 'nother world, different dimension."
    ,"You open my eyes and I'm ready to go, lead me into the light."
    ,"Infect me with your love and fill me with your poison."
    ,"Take me, ta-ta-take me."
    ,"Wanna be a victim ready for abduction."
    ,"Boy, you're an alien your touch so foreign, it's supernatural, extraterrestrial."
    ,"You're so supersonic, wanna feel your powers, stun me with your lasers."
    ,"Your kiss is cosmic, every move is magic."
    ,"This is transcendental, on another level, boy, you're my lucky star."
    ,"I wanna walk on your wave length and be there when you vibrate"
    ,"For you I'll risk it all, all."

    //WHO AM I LIVING FOR
    ,"Yeah eh yeah yeah."
    ,"I can feel a phoenix inside of me."
    ,"As I march alone to a different beat."
    ,"Slowly swallowing down my fear, yeah yeah."
    ,"I am ready for the road less traveled."
    ,"Suiting up for my crowning battle."
    ,"This test is my own cross to bare."
    ,"But I will get there."
    ,"It's never easy to be chosen, never easy to be called."
    ,"Standing on the frontline when the bombs start to fall."
    ,"I can see the heavens but I still hear the flames."
    ,"Calling out my name."
    ,"I can see the writing on the wall."
    ,"I can't ignore this war."
    ,"At the eh-end of it all."
    ,"Who am I living for?."
    ,"I can feel this light that's inside of me."
    ,"Growing fast into a bolt of lightning."
    ,"I know one spark will shock the world, yeah yeah."
    ,"So I pray for a favour like Esther."
    ,"I need your strength to handle the pressure."
    ,"I know there will be sacrifice but that's the price."
    ,"Heavy is the head that wears the crown."
    ,"Don't let the greatness get you down."
    ,"Heavy is the head that wears the crown."
    ,"Don't let the greatness get you down, oh, oh yeah."
    
    //Roar
    
    //Roar
    ,"I used to bite my tongue and hold my breath."
    ,"Scared to rock the boat and make a mess."
    ,"So I sat quietly, agreed politely."
    ,"I guess that I forgot I had a choice."
    ,"I let you push me past the breaking point."
    ,"I stood for nothing, so I fell for everything."
    ,"You held me down, but I got up (HEY!)."
    ,"Already brushing off the dust."
    ,"You hear my voice, you hear that sound."
    ,"Like thunder gonna shake the ground."
    ,"Get ready 'cause I’ve had enough."
    ,"I see it all, I see it now."
    ,"I got the eye of the tiger, a fighter, dancing through the fire."
    ,"'Cause I am a champion and you’re gonna hear me roar louder, louder than a lion."
    ,"'Cause I am a champion and you’re gonna hear me roar."
    ,"Oh oh oh oh oh oh, Oh oh oh oh oh oh."
    ,"You’re gonna hear me roar."
    ,"Now I’m floating like a butterfly."
    ,"Stinging like a bee I earned my stripes."
    ,"I went from zero, to my own hero."
    
    //Legendary Lovers
    
    //Birthday
    ,"I heard you're feeling nothing's going right."
    ,"Why don't you let me stop by?"
    ,"The clock is ticking, running out of time. So we should party all night."
    ,"So cover your eyes, I have a surprise."
    ,"I hope you got a healthy appetite."
    ,"If you wanna dance, if you want it all, you know that I'm the girl that you should call."
    ,"Boy, when you're with me I'll give you a taste."
    ,"Make it like your birthday everyday."
    ,"I know you like it sweet."
    ,"So you can have your cake."
    ,"Give you something good to celebrate."
    ,"So make a wish, I'll make it like your birthday everyday."
    ,"I'll be your gift, give you something good to celebrate."
    ,"Pop your confetti."
    ,"Pop your Pérignon."
    ,"So hot and heavy, 'Til dawn."
    ,"I got you spinning like a disco ball."
    ,"All night they're playing, your song."
    ,"We're living the life. We're doing it right."
    ,"You're never gonna be unsatisfied."
    ,"If you wanna dance."
    ,"If you want it all."
    ,"You know that I'm the girl that you should call."
    ,"Happy birthday."
    ,"So let me get you in your birthday suit."
    ,"It's time to bring out the big balloons."
    ,"So let me get you in your birthday suit."
    ,"It's time to bring out the big, big, big, big, big, big balloons."
    
    //Walking on air
    ,"Tonight, tonight, tonight, I'm walking on air."
    ,"You're giving me sweet, sweet ecstasy."
    ,"Yeah, you take me to utopia."
    ,"You're reading me like erotica, boy, you make me feel exotic, yeah."
    ,"Just when I think I can't take anymore."
    ,"We go deeper and harder than ever before."
    ,"We go higher and higher."
    ,"I feel like I'm already there."
    ,"I'm walking on air (tonight)."
    ,"I'm walking on air."
    ,"I'm walking, I'm walking on air (tonight)."
    ,"This is pure paradise, even heaven is jealous of our love."
    ,"Yes, we make angels cry, raining down on earth from up above."
    ,"Heaven is jealous of our love, angels are crying from up above."
    
    //Unconditionally
    ,"Oh no, did I get too close?"
    ,"Oh, did I almost see what's really on the inside?"
    ,"All your insecurities."
    ,"All the dirty laundry."
    ,"Never made me blink one time."
    ,"Unconditional, unconditionally."
    ,"I will love you unconditionally."
    ,"There is no fear now, let go and just be free, I will love you unconditionally."
    ,"Come just as you are to me."
    ,"Don't need apologies."
    ,"Know that you are worthy."
    ,"I'll take your bad days with your good."
    ,"Walk through the storm I would."
    ,"I do it all because I love you, I love you."
    ,"So open up your heart and just let it begin."
    ,"Open up your heart and just let it begin."
    ,"Open up your heart."
    ,"Acceptance is the key to be to be truly free."
    ,"Will you do the same for me?"
    ,"'Cause I will love you unconditionally (oh yeah)."
    
    //Dark Horse
    ,"Oh, no."
    ,"Ya'll know what it is, Katy Perry, Juicy J, aha. Let's rage."
    ,"I knew you were."
    ,"You were gonna come to me."
    ,"And here you are."
    ,"But you better choose carefully."
    ,"‘Cause I, I’m capable of anything."
    ,"Of anything and everything."
    ,"Make me your Aphrodite."
    ,"Make me your one and only."
    ,"But don’t make me your enemy, your enemy, your enemy."
    ,"So you wanna play with magic."
    ,"Boy, you should know what you're falling for."
    ,"Baby do you dare to do this?"
    ,"Cause I’m coming at you like a dark horse."
    ,"Are you ready for, ready for."
    ,"A perfect storm, perfect storm."
    ,"Cause once you’re mine, once you’re mine."
    ,"There’s no going back."
    ,"Mark my words."
    ,"This love will make you levitate."
    ,"Like a bird."
    ,"Like a bird without a cage."
    ,"But down to earth."
    ,"If you choose to walk away, don’t walk away."
    ,"It’s in the palm of your hand now baby."
    ,"It’s a yes or no, no maybe."
    ,"So just be sure before you give it all to me."
    ,"All to me, give it all to me."
    ,"Uh, She’s a beast. I call her Karma (come back)."
    ,"She eats your heart out. Like Jeffrey Dahmer (woo)."
    ,"Be careful Try not to lead her on Shorty’s heart is on steroids, 'cause her love is so strong."
    ,"You may fall in love when you meet her."
    ,"If you get the chance you better keep her."
    ,"She's sweet as pie but if you break her heart."
    ,"She'll turn cold as a freezer."
    ,"That fairy tale ending with a knight in shining armor."
    ,"She can be my Sleeping Beauty."
    ,"I’m gon’ put her in a coma."
    ,"Woo!"
    ,"Woo!"
    ,"Woo!"
    ,"Shorty so bad, I’m sprung and I don’t care."
    ,"She ride me like a roller coaster."
    ,"Turned the bedroom into a fair (a fair!)"
    ,"Her love is like a drug."
    ,"I was tryna hit it and quit it."
    ,"But lil' mama so dope."
    ,"I messed around and got addicted."
    
    //This is how we do
    ,"This is how we do, This is how we do."
    ,"Oh oh!"
    ,"Sipping on Rosé, Silver Lake sun, coming up all lazy."
    ,"(This is how we do)"
    ,"(This is how we do)"
    ,"(This is how we do)"
    ,"Slow cooking pancakes for my boy, still up, still fresh as a Daisy."
    ,"Playing ping pong all night long, everything's all neon and hazy."
    ,"Chanel this, Chanel that, hell yeah."
    ,"All my girls vintage Chanel baby."
    ,"It's no big deal, it's no big deal, it's no big deal."
    ,"This is no big deal."
    ,"This is how we do, yeah, chilling, laid back."
    ,"Straight stuntin' yeah we do it like that."
    ,"This is how we do, do do do do, this is how we do."
    ,"Big hoops, and maroon lips, my clique hoppin' in my Maserati."
    ,"Santa Barbara, chique, at La Super Rica, grabbing tacos, checking out hotties."
    ,"Now we talking astrology, getting our nails did, all Japanese-y."
    ,"This one goes out to the ladies at breakfast in last night's dress."
    ,"Uh-huh, I see you."
    ,"Yo, this goes out to all you kids that still have their cars at the club valet and it's Tuesday."
    ,"Yo, shout out to all you kids, buying bottle service, with your rent money."
    ,"Respect."
    ,"What? Wait. No, no, no, no."
    ,"Bring the beat back."
    
    //International Smile
    ,"Flowers in her hair, she don't care."
    ,"Peach-pink lips, yeah, everybody stares."
    ,"You think you've seen her in a magazine."
    ,"It's like she walked right out of your dreams."
    ,"Black ray-bans, you know she's with the band."
    ,"Passport stamps, she's cosmopolitan."
    ,"Yeah, she runs the place like Penny lane."
    ,"Yeah, you're lucky if you're on her plane."
    ,"From Tokyo to Mexico, to Rio."
    ,"That girl’s a trip, A one way ticket."
    ,"Takes you miles high, so high, 'cause she’s got that one international smile."
    ,"Catch her if you can."
    ,"Yeah, she's so in demand."
    ,"She's got that, je ne sais quoi, you know it."
    ,"So très chic, yeah, she's a classic."
    ,"Yeah, she's footloose and so fancy free."
    ,"Yeah, she dances to her own beat."
    ,"'Cause she's the muse and the artist."
    ,"Always leaves a trail of stardust."
    ,"'Cause she's a little bit of Yoko, And she's a little bit of 'Oh no'."
    ,"From LA, Miami, to New York City."
    ,"That girl’s a trip, a one way ticket."
    ,"Please fasten your seat belts and make sure your champagne glasses are empty."
    ,"We are now approaching the runway, so get ready for take off."
    ,"She's got that international smile, oh yeah, she's got that one international smile."

];





function getKPparagraph() {
  var numSentence = Math.floor(Math.random() * (13 - 6)) + 6;
  var paragraph = getSentence(numSentence);
    
  return $("<p />", {
    html: paragraph
  });
}

function loadKPparagraph() {
  var numSentence = Math.floor(Math.random() * (13 - 6)) + 6;
  var paragraph = getSentence(numSentance);
    
  return $("<p />", {
    html: paragraph
  });
}

function getSentence(times) {
    var sentence = " ";
    if(document.getElementById('sfw').checked) {
        for (var i=0;i<times;i++)
            { 
                sentence += " " + KPLyricsSFW[Math.floor(Math.random() * KPLyricsSFW.length)];
            }
            return sentence;
    }
    else {
        for (var i=0;i<times;i++)
            { 
                sentence += " " + KPLyrics[Math.floor(Math.random() * KPLyrics.length)];
            }
            return sentence;
    }
}

function clearList() {
  if ($(".results").text().length > 0) {
    $(".results").empty();
  }
}

$("body").on("change", ".qty", function() {
  clearList();
  var limit = $(".qty").val(), x = 0;
  while(x < limit) {
    $(".results").show().append(getKPparagraph());
    x += 1;
  }
});

$("body").on("change", ".sfw", function() {
  clearList();
  var limit = $(".qty").val(), x = 0;
  while(x < limit) {
    $(".results").show().append(getKPparagraph());
    x += 1;
  }
});









