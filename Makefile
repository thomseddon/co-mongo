
test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--require should \
		--harmony \
		--bail

testg:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--require should \
		--harmony \
		--bail \
		--grep $(grep)


.PHONY: test

