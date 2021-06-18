class Form
{
    constructor(){}

  display (){
      var title = createElement('h2')
      title.html("Car Racing Game")
      title.position(130,0)

      var input = createInput("Name")
      var button = createButton("Submit")

      input.position(130,160)
      button.position(250,200)

      button.mousePressed(function(){
          input.hide()
          button.hide()

          var Name = input.value()
          PlayerCount+=1
          player.update(Name)
          player.updatecount(PlayerCount)

          var greeting = createElement('h3')
          greeting.html("HELLO"+Name)
          greeting.position(130,160)
      })
  }

}