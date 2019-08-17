import includes from 'core-js/features/string/virtual/includes'
import repeat from 'core-js/features/string/virtual/repeat'
import assign from 'core-js/features/object/assign'

String.prototype.includes = includes
String.prototype.repeat = repeat
Object.assign = assign
