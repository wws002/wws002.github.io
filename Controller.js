class Controller
{
	constructor(model, view)
	{
		this.model = model;
		this.view = view;
		this.key_right = false;
		this.key_left = false;
		this.key_space = false;
		let self = this;
		document.addEventListener('keydown', function(event) { self.keyDown(event); }, false);
		document.addEventListener('keyup', function(event) { self.keyUp(event); }, false);
	}

	keyDown(event)
	{
		if(event.keyCode == 39)
			this.key_right = true;

		else if(event.keyCode == 37)
			this.key_left = true;

		else if(event.keyCode == 32)
		if(this.model.mario.onTop == true || this.model.mario.y == this.model.ground)
			this.key_space = true;
	}

	keyUp(event)
	{
		if(event.keyCode == 39) this.key_right = false;
		else if(event.keyCode == 37) this.key_left = false;
		else if(event.keyCode == 32) this.key_space = false;
	}

	update()
	{
		this.model.mario.notePrevious();
    this.model.mario.runningLeft = false;
    this.model.mario.runningRight = false;

    if(this.key_right)//make mario run right
		{
      this.model.mario.runningRight = true;
    }

		if(this.key_left)//make Mario run left
		{
      this.model.mario.runningLeft = true;
    }

		if(this.key_space)//make mario jump
		{
      if (this.model.mario.vvel == 0)
      {
        this.model.mario.vvel = -40;
      }
		}
	}
}
