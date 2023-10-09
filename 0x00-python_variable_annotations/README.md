# Python type annotations
python type annotations are used to specify the data types of variable, function arguments, and return values in python code.
Type annotations help improve code readability and can be used by tools like MyPy for type checking.


# Basic type annotations
```python
# variable with type annotation
age: int = 25

# Function argument and return type annotations
def add(x: int, y: int) -> int;
    return x + y
```

# Complex Types
You can use the `typing` module to annotate more complex data structures
```
from typing import List, Dict

# List of integers
numbers: List[int] = [1,2,3]

# Dictionary with string keys and integer values
person : Dict[str, int] = {'age': 25, 'height': 180}

# Optional types
# you can denote optional types using `Optional` from 'typing' module

from typing import Optional

def greet(name: Optional[str] = None) -> str;
    if name is None:
       return "Hello, World!"
    else:
       return f"Hello, {name}!"
# Union Types
# You can specify that a variable can have multiple types using `Union`
from typing import Union
def get_length(data: Union[str, List[int]]) -> int:
    if isinstance(data, str):
       return len(data)
    elif isinstance(data, list):
       return len(data)
    else:
       raise ValueError("Unsupported data type")
# Here `data` can eb string or a list of integers

# Type Aliases
# You can create aliases for complex types to improve readability
from typing import List, Tuple

Coordinates = Tuple[float, float]
Route = List[Coordinates]

def calculate_distance(route: Route) -> float:
    # Calculate the distance between coordinates in the route
    pass
```