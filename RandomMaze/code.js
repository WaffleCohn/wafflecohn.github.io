// TODO: make sure all mazes have outer border
// basicall check even/odd
// or make sure size divides evenly

Point = function(x, y)
{
    this.x = x;
    this.y = y;
}

Node = function(x, y, num, pt)
{
    this.x = x;
    this.y = y;
    this.num = num;
    this.parent = pt;
}

Rectangle = function(x, y, w, h)
{
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;

    this.draw = function(ctx)
    {
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

var rect = new Rectangle(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "#009688";
rect.draw(ctx);

window.addEventListener("resize", function() { drawMaze(); solution = []; solve(); solved = false; });
window.addEventListener("keypress", toggleSolution);

var grid = [],
    size = 10; // side length in pixels

function drawMaze()
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var visited = [],
        rows = Math.floor(canvas.width/size),
        cols = Math.floor(canvas.height/size);

    ctx.fillStyle = "#000000";
    var rect1 = new Rectangle(0, cols*size, canvas.width, size),
        rect2 = new Rectangle(rows*size, 0, size, canvas.height);
    rect1.draw(ctx);
    rect2.draw(ctx);

    // Create the arrays
    for (var i=0; i < rows; i++)
    {
        grid[i] = [];
        visited[i] = [];
        for (var j=0; j < cols; j++)
        {
            grid[i][j] = false;
            visited[i][j] = false;
        }
    }

    // Set up the initial grid
    for (var i=0; i < rows; i+=2)
        for (var j=0; j < cols; j+=2)
            grid[i][j] = true;

    /*for (var i=0; i < rows; i++)
    {
        var str = "";
        for (var j=0; j < cols; j++)
        {
            str += grid[i][j] ? "." : "X"
        }

        console.log(str);
    }*/

    var stack = [];
    stack.push(new Point(0, 0)); // start at (x,y)

    while (stack.length > 0)
    {
        var loc = stack[stack.length-1],
            x = loc.x,
            y = loc.y,
            cont = false;

        // Fischer-Yates Shuffle: randomly weighted direction to go in
        var order = ["up", "down", "left", "right"];
        for (var i=3; i >= 0; i--)
        {
            var index = Math.floor(Math.random() * (i+1)),
                temp = order[i];
            order[i] = order[index];
            order[index] = temp;
        }

        // Try each direction
        for (var i=0; i < 4; i++)
        {
            switch (order[i])
            {
                case "up":
                    if (y-2 >= 0)
                    {
                        if (!visited[x][y-2])
                        {
                            stack.push(new Point(x, y-2));
                            grid[x][y-1] = true;
                            visited[x][y-2] = true;
                            cont = true;
                        }
                    }
                    break;
                case "down":
                    if (y+2 < grid[0].length)
                    {
                        if (!visited[x][y+2])
                        {
                            stack.push(new Point(x, y+2));
                            grid[x][y+1] = true;
                            visited[x][y+2] = true;
                            cont = true;
                        }
                    }
                    break;
                case "left":
                    if (x-2 >= 0)
                    {
                        if (!visited[x-2][y])
                        {
                            stack.push(new Point(x-2, y));
                            grid[x-1][y] = true;
                            visited[x-2][y] = true;
                            cont = true;
                        }
                    }
                    break;
                case "right":
                    if (x+2 < grid.length)
                    {
                        if (!visited[x+2][y])
                        {
                            stack.push(new Point(x+2, y));
                            grid[x+1][y] = true;
                            visited[x+2][y] = true;
                            cont = true;
                        }
                    }
                    break;
                default:
            }

            if (cont) break;
        }

        if (cont) continue;

        // if dead-end, backtrack
        stack.pop();
    }

    /*for (var i=0; i < rows; i++)
    {
        var str = "";
        for (var j=0; j < cols; j++)
        {
            str += grid[i][j] ? "." : "X"
        }

        console.log(str);
    }*/

    ctx.fillStyle = "#000000";

    /*for (var i=0; i < rows; i++)
    {
        var rect = new Rectangle(0, i*size, size, size),
            rect2 = new Rectangle(i*size, 0, size, size);

        rect.draw(ctx);
        rect2.draw(ctx);
    }*/

    for (var i=0; i < rows; i++)
    {
        for (var j=0; j < cols; j++)
        {
            if (!grid[i][j])
            {
                var rect = new Rectangle(i*size, j*size, size, size);
                rect.draw(ctx);
            }
        }
    }
}

drawMaze();

var solved = false,
    solution = []; // Points

function solve()
{
    var graph = [];
    for (var i=0; i < grid.length; i++)
    {
        graph.push([]);
        for (var j=0; j < grid[0].length; j++)
        {
            graph[i].push(new Node(i, j, Infinity, null));
        }
    }

    var q = [],
        start = new Point(0, 0);
    graph[start.x][start.y].num = 0;
    q.push(start);

    while (q.length > 0)
    {
        var loc = q.shift(),
            x = loc.x,
            y = loc.y;

        if (x > 0)
        {
            if (!Number.isFinite(graph[x-1][y].num) && grid[x-1][y])
            {
                graph[x-1][y].num = graph[x][y].num + 1;
                graph[x-1][y].parent = graph[x][y];
                q.push(new Point(x-1, y));
            }
        }

        if (x < grid.length - 1)
        {
            if (!Number.isFinite(graph[x+1][y].num) && grid[x+1][y])
            {
                graph[x+1][y].num = graph[x][y].num + 1;
                graph[x+1][y].parent = graph[x][y];
                q.push(new Point(x+1, y));
            }
        }


        if (y > 0)
        {
            if (!Number.isFinite(graph[x][y-1].num) && grid[x][y-1])
            {
                graph[x][y-1].num = graph[x][y].num + 1;
                graph[x][y-1].parent = graph[x][y];
                q.push(new Point(x, y-1));
            }
        }

        if (y < grid[0].length - 1)
        {
            if (!Number.isFinite(graph[x][y+1].num) && grid[x][y+1])
            {
                graph[x][y+1].num = graph[x][y].num + 1;
                graph[x][y+1].parent = graph[x][y];
                q.push(new Point(x, y+1));
            }
        }
    }

    var node = graph[graph.length - (graph.length % 2 == 1 ? 1 : 2)][graph[0].length - (graph[0].length % 2 == 1 ? 1 : 2)];
    solution.push(new Point(node.x, node.y));

    while (node.parent)
    {
        solution.push(new Point(node.parent.x, node.parent.y));
        node = node.parent;
    }
}

solve();

/*for (var i=0; i < solution.length; i++)
{
    var rect = new Rectangle(solution[i].x*size, solution[i].y*size, size, size);
    ctx.fillStyle = "#009688";
    rect.draw(ctx);
}*/

function toggleSolution(e)
{
    var keyCode = e ? e.keyCode : event.keyCode;

    if (keyCode == 32)
    {
        if (!solved)
        {
            ctx.fillStyle = "#009688";
            for (var i=0; i < solution.length; i++)
            {
                var rect = new Rectangle(solution[i].x*size, solution[i].y*size, size, size);
                rect.draw(ctx);
            }

            ctx.fillStyle = "#FF0000";
            var rect = new Rectangle(solution[0].x*size, solution[0].y*size, size, size);
            rect.draw(ctx);

            ctx.fillStyle = "#00FF00";
            rect.x = solution[solution.length-1].x * size;
            rect.y = solution[solution.length-1].y * size;
            rect.draw(ctx);
        }
        else
        {
            clearSolution();
            clearInterval(animate);
            startCount = solution.length - 1;
        }

        solved = !solved;
    }
    else if (keyCode == 13)
    {
        if (!solved)
        {
            if (startCount == -1) startCount = solution.length - 1;
            animateSolution();

            solved = true;
        }
        else
        {
            clearInterval(animate);

            if (startCount == -1) { clearSolution(); solved = false; }
        }
    }
}

var animate,
    startCount = solution.length-1;

function animateSolution()
{
    var i = startCount;

    animate = setInterval(function () {
        if (i == 0) ctx.fillStyle = "#FF0000";
        else if (i == solution.length-1) ctx.fillStyle = "#00FF00";
        else ctx.fillStyle = "#009688";

        var rect = new Rectangle(solution[i].x*size, solution[i].y*size, size, size);
        rect.draw(ctx);

        i--;
        startCount--;

        if (i == -1) clearInterval(animate);
    }, 5);
}

function clearSolution()
{
    ctx.fillStyle = "#FFFFFF";

    for (var i=0; i < solution.length; i++)
    {
        var rect = new Rectangle(solution[i].x*size, solution[i].y*size, size, size);
        rect.draw(ctx);
    }
}
