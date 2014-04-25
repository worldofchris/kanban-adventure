var adventure_map = {
      "root": ["queueing-strategies",
               "limit-wip",
               "make-the-work-visible",
               "create-options",
               "batch-sizes",
               "feedback"],
      "options":[
        {
          "name": "queueing-strategies",
          "title": "Queueing Strategies",
          "background-color": "red",
          "content": {
            "image": "resources/airport-queue.jpg"
          },
          "notes": ["**Who** can *tell* _me_ what this is?<br/>  It's an example of a dysfunctional queuing strategy.<br/>",
                    "Why is it disfunctional?<br/>Because an airline employee has to keep expediting by ",
                    "shouting the names of closing flights and pulling people to the front of the queue<br/>",
                    "Why is this a problem?<br/>",
                    " * No one knows when they will get to the head of the queue",
                    " * No one knows whether they will get to the head of the queue in time",
                    " * We don't know the length of the queue",
                    " * These screens aren't doing anything to help either"],
          "links": ["predict-throughput", "limit-queue-sizes", "make-the-work-visible", "feedback"]
        },
        {
          "name": "limit-wip",
          "title": "Limit WIP",
          "background-color": "orange",
          "content": {
            "image": "resources/kanban-board-wip-limits.jpg"
          },
          "notes": ["Limiting WIP with explicit WIP limits on a Kanban board is something that took me a couple ",
                    "of years to get to.  I didn't use them at all in my first use of Kanban at YouView, instead ",
                    "using the 'Avatar' method.",
                    "* Who here is using explicit WIP limits?",
                    "* Who isn't?",
                    "They appear to be 'Top Down'",
                    "They are not something you can do on your own BUT you can limit your own WIP",
                    "Stop Starting, Start Finishing has become a mantra for me and one that I apply out of habit",
                    "whenever a context switch looms",
                    "What is the cost of not finishing what I'm doing now?"],
          "links": ["individual-responsibility", "habits", "limiting-queue-lengths", "a-function-of-maturity", "round-robin-scheduling"]
        },
        {
            "name": "make-the-work-visible",
            "title": "Make the Work Visible",
            "background-color": "lightblue",
            "links": ["maltese-air-defence", "story-map", "feedback", "availability-heuristic"],
            "notes": ["This is not just about the Kanban board",
                      "When work is visible on the Kanban board it becomes more apparent",
                      "what work, or aspects of the work are still invisible",
                      "and the Kanban board is not necessarily the solution for this"]
        },
        {
            "name": "create-options",
            "title": "Create Options",
            "background-color": "lightyellow",
            "notes": ["This is not strictly speaking part of Kanban with a capital K",
                      "But Kanban helps you create options, helps you keep your options",
                      "open for longer by deffering commitment to the last responsible moment"],
            "links": ["oranges", "apples"]
        },
        {
            "name": "batch-sizes",
            "title": "Batch Sizes",
            "background-color": "pink"
        },
        {
            "name": "feedback",
            "title": "Feedback",
            "content": {
              "image": "resources/failing-tests.jpg"
            },
            "notes": ["All software is Proof Of Concept",
                      "TDD enables you to endlessly defer commitment",
                      "It is _soft_ ware after all."],
            "background-color": "lightgreen"
        },
        {
            "name": "predict-throughput",
            "title": "Predict Throughput",
            "content": {
              "image": "resources/cumulative-throughput.jpg"
            },
            "notes": ["How quickly are we going to get through this?",
                      ""]
        },
        {
            "name": "story-map",
            "title": "Story Map",
            "links": "stateful-story-map"
        },
        {
            "name": "availability-heuristic",
            "title": "Availability Heuristic",
            "links": ["durers-rhino", "thinking-fast-and-slow", "impact-maps", "partial-adoption"]
        },
        {
            "name": "impact-maps",
            "title": "Impact Maps",
            "links": ["forked-impact-map"]
        }

    ]};