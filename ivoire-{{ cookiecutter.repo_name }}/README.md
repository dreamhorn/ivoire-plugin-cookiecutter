{%- set cc = cookiecutter -%}
ivoire-{{ cc.repo_name }}
===================================

A plugin for the [Ivoire](https://www.npmjs.com/package/ivoire) random number
generator framework.


- [Installing](#installing)
- [Getting Started](#getting-started)
- [Reference](#reference)


Installing
----------

To install, use `npm`:

    npm install ivoire-{{ cc.repo_name }}

Alternately, you can find the source [on Github](https://github.com/dreamhorn/ivoire-{{ cc.repo_name }}).


Getting Started
---------------

`ivoire-{{ cc.repo_name }}` extends the `ivoire` package. You can require it directly:

    var Ivoire = require('ivoire-{{ cc.repo_name }}');

Or you can require it alongside `ivoire`:

    var Ivoire = require('ivoire');
    require('ivoire-{{ cc.repo_name }}');

Either way, instantiate and start rolling!

    var ivoire = new Ivoire();
    // TODO: Show example


Reference
---------

`ivoire-{{ cc.repo_name }}` adds some methods to the `Ivoire` prototype object, making them
available on all `Ivoire` instances.

TODO: Add API reference

- [`#TODO()`](#TODO')—TODO

### #TODO()

#### Syntax

    ivoire.TODO(arg)

#### Usage

TODO: Describe methods

    var ivoire = new require('ivoire-{{ cc.repo_name }}');

    // TODO: Give usage examples
