INSTALL_TRIGGER_FILE = node_modules/react/index.js
BUILD_TRIGGER_FILE = build/index.html

build : $(BUILD_TRIGGER_FILE) install
	npm run build

install : $(INSTALL_TRIGGER_FILE)
	npm install

serve : build
	lighttpd/lighttpd-serve

clean :
	rm -rf build node_modules lighttpd/{log,.lighttpd.conf}

