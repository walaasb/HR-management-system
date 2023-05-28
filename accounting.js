'use strict';


let body=document.getElementsByTagName("body")[0];
let header=document.createElement("header")
header.id="header"
body.appendChild(header)


let pageName=document.createElement("h2")
pageName.textContent="HR-mangment"
pageName.style.paddingRight="700px"
pageName.style.paddingTop="20px"
pageName.style.color="#1b7072"
header.appendChild(pageName)

let pageLogo=document.createElement("img")
pageLogo.setAttribute("src","https://t4.ftcdn.net/jpg/03/04/90/35/360_F_304903511_pS6PV6uNCQgGUFiKW5BbZLKxB6A84tTj.jpg")
pageLogo.setAttribute("width","70")
pageLogo.style.position="absolute"
pageLogo.style.marginRight="588px"

header.appendChild(pageLogo)

let navBar=document.createElement("ul")
navBar.id="navbar"
navBar.style.textDecoration="none"
navBar.style.display="flex"
header.appendChild(navBar)


let homeLink= document.createElement("A")
homeLink.setAttribute("href","./index.html")
homeLink.textContent="Home"
homeLink.style.paddingTop="30px"
homeLink.style.textDecoration="none"
homeLink.style.color="#1b7072"
homeLink.style.paddingRight="20px"
header.appendChild(homeLink)

let accountingLink=document.createElement("A")
accountingLink.setAttribute("href","./accounting.html")
accountingLink.textContent="Accounting"
accountingLink.style.paddingTop="30px"
accountingLink.style.textDecoration="none"
accountingLink.style.color="#1b7072"
header.appendChild(accountingLink)




let footer=document.createElement("div")
footer.id=footer
footer.style.position="fixed"
footer.style.right="0"
footer.style.left="0"
footer.style.bottom="10px"

body.appendChild(footer)


let hrMangment= document.createElement("A")
hrMangment.setAttribute("href","https://www.linkedin.com/in/walaa-sbeitan-79b899184/")
hrMangment.textContent="HR- help"
hrMangment.style.margin="140px"
hrMangment.style.color="#1b7072"
hrMangment.style.textDecoration="none"
hrMangment.style.paddingBottom="20px"
footer.appendChild(hrMangment)


let hrInstgram=document.createElement("img")
hrInstgram.setAttribute("src","https://img.freepik.com/premium-vector/black-outline-social-media-logo_197792-2416.jpg")
hrInstgram.style.width="20px"
hrInstgram.style.marginLeft="-115px"
hrInstgram.style.marginBottom="-5px"
footer.appendChild(hrInstgram)


let hrFacebook=document.createElement("img")
hrFacebook.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAADnCAMAAABPJ7iaAAAAdVBMVEX///8AAACGhobJyck8PDzY2Njn5+cJCQlgYGC7u7sEBATc3Nz6+vpra2tPT0+Ojo6lpaXS0tLk5ORVVVX09PRmZmaVlZUQEBBcXFwcHByurq4XFxdXV1c3Nze0tLQmJiZISEinp6d0dHR/f38rKyuKioo4ODgLpCqfAAAC8klEQVR4nO3d6XLaMBRAYZctoRZgDAESiB22vv8jtk2XKYtkabggXfec346dbwADxpKyjIiIiIiIiIiIiIiIiIiIiIiI2tq0mHSidVxU8zu5TPHxJXLLff8eskVs169mA3HZKrbpb8IPnJnFBv1TV1T2HJtz0lSQ1omNOa2We71NY1vO64jR0no6/qwUkg1eY0su2grR3mJDLlsJ0V5iQy5bCz0jo3++upLQ+3YvtuNKQm9tKdKEPpFAe2jQoCUVNGhJBQ2afE/vH7vtNL9WOVJMW86q3HE1eKeWVhcNl27UPmqLxoMqpfU8viPrpM2Mx0FV0sY+MpW0Vy+ZSprnVQ2FtL3nQfXRPJ+OGmkT34Pqo+WtpY29D6qO9tZemv+lem20g/8vtdpoG99Tf5btldGOTYfKh9vis6rhoMnR3GcRU/jfd5MczfkPDd+l9hSD5jpBht2bookWeHebIlo3cE96aPOQ15kuWhW6Jz204HsS1dDMurW0wbK9tCdo0KBBgwYNGjRo0P47mu13mkHwnuLS1sXwrMp68bg63/T3H4zTpG0EDj1Jk+Z1e0hD1jEvcWl+94c4M9YxWOpp9tOLepp9uKN6mn3knHqa9QSpn2YfpKqdNrcPUtVOc3z+0k7rt5fm+P1GO81+gtROM5vW0uZ1a2muL6hxaTcP5s+TpX3rn2cfuVBebNvv567btGJfG/l6mn0uDVOfb/u5ecK0i2xXtMrgPamhteBiHTRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBg9YGmnXAZkSa0MJJcit5ydG853R1V6RH6wmtC1sGTwV1d5r3HMNNiS2XKkYTWzY1dK68u9N2UrLGOV8fTpNaoPJH80NStEpO5h4D8nBa88IbQZUia4uK0ApZWZYZiTduAVotuTbxn7q3f+Cy0nx3cFgIzBlxJVMWu9HzDa1s83Abn92+jI7dey1OT0RERERERERERERERERERETt6DvK9GSPm4j88QAAAABJRU5ErkJggg==")
hrFacebook.style.width="20px"
hrFacebook.style.marginLeft="3px"
hrFacebook.style.marginBottom="-5px"
footer.appendChild(hrFacebook)


let copyRight=document.createElement("p")
copyRight.textContent="©"
copyRight.style.marginLeft="3px"
copyRight.style.marginBottom="-5px"
copyRight.style.display="inline"
footer.appendChild(copyRight)