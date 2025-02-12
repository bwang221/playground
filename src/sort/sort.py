'''
### Rules

Sort the packages using the following criteria:

- A package is **bulky** if its volume (Width x Height x Length) is greater than or equal to 1,000,000 cm³ or when one of its dimensions is greater or equal to 150 cm.
- A package is **heavy** when its mass is greater or equal to 20 kg.

You must dispatch the packages in the following stacks:

- **STANDARD**: standard packages (those that are not bulky or heavy) can be handled normally.
- **SPECIAL**: packages that are either heavy or bulky can't be handled automatically.
- **REJECTED**: packages that are **both** heavy and bulky are rejected.

### Implementation

Implement the function **`sort(width, height, length, mass)`** (units are centimeters for the dimensions and kilogram for the mass). This function must return a string: the name of the stack where the package should go.
'''

_bulky_volume=100000
_heavy_package=20

STANDARD='STANDARD'
SPECIAL='SPECIAL'
REJECTED='REJECTED'


def sort(width: int, height: int, length: int, mass: int) -> int:
	volume=width*height*length
	if volume>=_bulky_volume and mass>=_heavy_package:
		return REJECTED
	if volume>=_bulky_volume or mass>=_heavy_package:
		return SPECIAL
	return STANDARD

'''
#Alternative
_STACKS=[STANDARD, SPECIAL, REJECTED]
def sort(width: int, height: int, length: int, mass: int) -> int:
	volume=width*height*length
	idx=int(volume>=_bulky_volume)+int(mass>=_heavy_package)
	return _STACKS[idx]
'''