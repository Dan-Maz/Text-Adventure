//document.addEventListener("DOMContentLoaded", start)
//
//function start(){
//
// startbtn.addEventListener("click", adven);
//
//function adven()
//{
//
// var weaponname;
//  document.getElementById('start').innerText = 'You wake up in a deserted forest clearing with no idea where you are or how you got there.';
//
//  setTimeout(delay, 5000);
//
//function delay()
//  {
//  var ch1 = prompt('You wake up in a deserted forest clearing. What do you do? Do you EXPLORE the clearing or LEAVE and enter the forest?').toLowerCase();


/////////////////////////////EXPLORE OR LEAVE CLEARING/////////////////////////
////EXPLORE CLEARING
//    if(ch1 === 'explore')
//    {
//      document.getElementById('ch1v1').innerText = 'You explore the clearing.';
//
//      setTimeout(swordname, 2000);
//
//      function swordname()
//      {
//        document.getElementById('ch2v1').innerText = 'You find a rusty sword in the grass.';
//
//        var ch2v1 = prompt('You find a rusty sword in the grass, what do you call it?');
//
//        document.getElementById('sname').innerText = 'You name your sword ' + ch2v1 + '.';
//        //////SET WEAPON NAME
//        weaponname = ch2v1
//
//        setTimeout(choice3v1, 2000);
//      }
//
//      function choice3v1()
//      {
//        document.getElementById('ch3v1').innerText = "It's getting dark.";
//
//        var ch3v1 = prompt("It's getting dark. Do you CLIMB a tree to sleep, sleep in the CLEARING, or head into the FOREST?").toLowerCase();


////////////////////IT'S GETTING DARK CLEARING VERSION///////////////////////
//EXPLORE CLEARING > CLIMB TREE
        if(ch3v1 === 'climb')
        {
          document.getElementById('treeclimb').innerText = "You climb a tree and attempt to get comfortable for the night.";

          setTimeout(treenoise, 3000);

          function treenoise()
          {
           document.getElementById('treenoise').innerText = 'You hear some noises below your tree during the night but otherwise sleep well.';
          }

          setTimeout(choice4v1v1, 5500);

          function choice4v1v1()
          {
            var ch4v1v1 = prompt('Morning comes. Do you go back to the CLEARING, or head into the FOREST?').toLowerCase();


/////////////////////GO BACK TO CLEARING OR FOREST//////////////////
//EXPLORE CLEARING > CLIMB TREE > RETURN CLEARING
            if(ch4v1v1 === 'clearing')
            {
              document.getElementById('death').innerText = "You burst into flames because I haven't written this part yet.";/////////////////
            }


//EXPLORE CLEARING > CLIMB TREE > FOREST WALK
            else if(ch4v1v1 === 'forest')
            {
              document.getElementById('mornch').innerText = 'You decide to head into the forest.';

              document.getElementById('death').innerText = "You turn into a ferret because I haven't written anything this far yet.";////////////////
            }
          }
        }


//EXPLORE CLEARING > STAY CLEARING
        else if(ch3v1 === 'clearing')
        {
          document.getElementById('death').innerText = "You explode for no reason because I haven't written this part yet.";/////////////////
        }


//STAY CLEARING > FOREST WALK
        else if(ch3v1 === 'forest')
        {
          document.getElementById('death').innerText = "You suffocate on nothing because I haven't written this part yet.";/////////////////////////
        }


//STAY CLEARING > TYPE ERROR
        else
        {
          document.getElementById('death').innerText = "You get smooshed by an invisble hammer because you can't type.";/////////////////////////
        }
      }
    }


//LEAVE CLEARING
//  else if(ch1 === 'leave')
//    {
//
//      document.getElementById('ch1v2').innerText = 'You head into the forest looking for answers.';
//
//      setTimeout(fordelay, 3000);
//
//      function fordelay()
//      {
//       document.getElementById('ch2v2').innerText = "It's getting dark.";
//
//       var ch2v2 = prompt("It's getting dark. What do you do? Do you continue WALKING or find a place to SLEEP?").toLowerCase();


///////////////////GETTING DARK FOREST////////////////// VERSION////////////////////////////
//LEAVE CLEARING > CONTINUE WALKING
       if(ch2v2 === 'walking')
       {
        document.getElementById('ch2v2').innerText = "You continue walking in the darkening forest.";

        setTimeout(fch3v2, 3000);

        function fch3v2()
        {
         document.getElementById('ch3v2').innerText = "There's rustling in the bushes.";

         var ch3v2 = prompt("Do you INVESTIGATE the noises or RUN?").toLowerCase();

/////////////////////RUSTLING BUSHES////////////////////
//LEAVE CLEARING > CONTINUE WALKING > INVESTIGATE
         if(ch3v2 === 'investigate')
          {

          }


//LEAVE CLEARING > CONTINUE WALKING > RUN
         else if(ch3v2 === 'run')
          {

          }
        }
       }


//LEAVE CLEARING > SLEEP
       else if(ch2v2 === 'sleep')
       {

       }


//LEAVE CLEARING > TYPE ERROR
       else
       {

       }
      }
    }


//TYPE ERROR
    else//ch1
    {
      document.getElementById('death').innerText = "You refresh and start over because that's not an option.";
    }
}
}
}

