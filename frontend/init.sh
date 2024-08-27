#!/bin/sh

# Flag file path
FLAG_FILE="/home/node/.container_initialized"

# Check if flag file exist
if [ ! -f $FLAG_FILE ]; then
  
    # Install dependancies
    npm install

    # Create flag file
    touch $FLAG_FILE
    
fi

# Start application
npm run dev --host