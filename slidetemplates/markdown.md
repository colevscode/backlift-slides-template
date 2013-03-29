##And we're done!!

Thanks for taking the course! Questions or comments:

	@colevscode
	cole@backlift.com

Cheers!


###extra curricular exercise:


Backlift prefetching can be accomplished by adding:

	prefetch:
		- /backliftapp/captions
		- /backlift/toc/photos

to config.yml, then including a {{$ prefetch}} tag in index.html before {{$ scripts}}.

Then iterate over Backlift.cache[] values to reset your collections in main.js

	
