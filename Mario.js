////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////Mario//////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
class Mario
{
	constructor(model, x, y)
	{
		this.type = "Mario";
		this.model = model;
		this.x = x;
		this.prev_x = x;
		this.y = y;
		this.prev_y = y;
		this.w = 60;
		this.h = 95;
		this.mframe = 0;
		this.vvel = 0.0;
		this.facingRight = true;
		this.runningRight = false;
		this.runningLeft = false;
		this.onTop = false;
		this.sideCollide = false;
		this.type = "Mario";

		//load mario pics
		this.marioPics = [];
		for(let i = 0; i < 10; i++)
		{
			this.marioPics[i] = new Image();
		}
		this.marioPics[0].src = "mario1.png";
		this.marioPics[1].src = "mario2.png";
		this.marioPics[2].src = "mario3.png";
		this.marioPics[3].src = "mario4.png";
		this.marioPics[4].src = "mario5.png";
		this.marioPics[5].src = "mario1left.png";
		this.marioPics[6].src = "mario2left.png";
		this.marioPics[7].src = "mario3left.png";
		this.marioPics[8].src = "mario4left.png";
		this.marioPics[9].src = "mario5left.png";
	}

	notePrevious()
	{
		this.prev_x = this.x;
		this.prev_y = this.y;
	}

	collision(x, y, w, h)
  {
    if (this.x + this.w <= x)
      return false;
    if (this.x >= x + w)
      return false;
    if (this.y + this.h <= y)
      return false;
    if (this.y >= y + h)
      return false;

    return true;
  }

	leaveBlock(x, y, w, h)
  {
    if (this.y + this.h > y && this.prev_y + this.h <= y) //collision from the top
    {
      this.vvel = 0;
      this.y = y - this.h;
      this.onTop = true;
    }
    if (this.y < y + h && this.prev_y >= y + h) //collision from the bottum
    {
      this.y = y + h;
      this.vvel = 0.1;
    }
    if (this.x + this.w > x && this.prev_x + this.w <= x) //collision from the left
    {
      this.sideCollide = true;
      this.runningRight = false;
      this.model.scrollPos = x - this.model.startPos - this.w;
			this.model.bScrollPos -= 2;
      this.x = x - this.w;
    }
    if ( this.x < x + w && this.prev_x >= x + w) //collision from the right
    {
      this.sideCollide = true;
      this.runningLeft = false;
      this.model.scrollPos = x - this.model.startPos + w;
			this.model.bScrollPos += 2;
      this.x = x + w;
    }
  }

	drawMe(ctx)
	{
		//animate mario
	  if (this.facingRight) //if he's facing right, animate right
	  {
	    this.mframe++; if (this.mframe > 4) this.mframe = 0;

      //if keyRight and mario is on a surface, draw him running
	    if(this.runningRight && (this.onTop == true || this.y == this.model.ground))
	      ctx.drawImage(this.marioPics[this.mframe], this.model.startPos, this.y);

	    //else draw him standing still
	    else ctx.drawImage(this.marioPics[3], this.model.startPos, this.y);
	  }
	  else //if he's facing left,  animate left
	  {
	    this.mframe++; if (this.mframe < 5 || this.mframe > 9) this.mframe = 5;

	    //if keyLeft and mario is on a surface, draw him running
	    if(this.runningLeft && (this.onTop == true || this.y == this.model.ground))
	      ctx.drawImage(this.marioPics[this.mframe], this.model.startPos, this.y);

	    //else draw him standing still
	    else ctx.drawImage(this.marioPics[8], this.model.startPos, this.y);
	  }
	}

	update()
	{
		this.onTop = false;
    this.sideCollide = false;
    this.vvel += 3.14159;
    this.y += this.vvel;

    if(this.runningRight)
    {
      this.x+=12;
      this.facingRight = true;
      this.model.scrollPos += 12;
			this.model.bScrollPos += 2;
    }

    if(this.runningLeft)
    {
      this.x-=12;
      this.facingRight = false;
      this.model.scrollPos -= 12;
			this.model.bScrollPos -= 2;
    }

    if(this.y > this.model.ground)//if he's on the ground, put him there
    {
      this.y = this.model.ground;
      this.vvel = 0;
    }

		//collision detection
		for(let i = 0; i < this.model.sprites.length; i++)
		{
			let s = this.model.sprites[i];

			if(s.type != "Mario" && s.type != "Coin")
			{
				if(this.x + this.w == s.x || this.x == s.x + s.w)
					this.sideCollide = true;

				if(this.collision(s.x, s.y, s.w, s.h))
					this.leaveBlock(s.x, s.y, s.w, s.h);
			}
		}
	}
}
