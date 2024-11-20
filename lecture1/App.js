       import React from "react";
       import ReactDOM from "react-dom/client";
       // Om Namaya shivaye using React
        // const heading=React.createElement('h1',
        //     {id:"heading", xyz:"abc"},
        //     "Om namaya shivaaye"
        // ); // this will just create object
        // const root=ReactDOM.createRoot(document.getElementById("root"));
        // root.render(heading); // this will render the object into the dom


        /**creating nested div using React 
         * 
         * <div id="parent">
         *     <div id="child1">
         *      <h1>I'm h1 tag</h1>
         *      <h2>I'm h2 tag</h2>
         *      </div>
         *      <div id="child2">
         *      <h1>I'm h1 tag</h1>
         *      <h2>I'm h2 tag</h2>
         *      </div>
         * </div>
         * 
         * 
         * 
         * 
         * 
         */

        const parent=React.createElement('div',
            {id:'parent'},[
            React.createElement('div',{id:'child1'},
                [React.createElement('h1',{},"Everyone bow to shiva"),React.createElement('h2',{},"i am h2 tag")]
            ),
            React.createElement('div',{id:'child2'},
                [React.createElement('h1',{},"i am h1 tag but cooler"),React.createElement('h2',{},"i am h2 tag")])
            ]);
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent); // putting parent into root tag
        

