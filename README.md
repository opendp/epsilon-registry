# epsilon-registry
Sharing differential privacy use case information

## Development

We're using Jekyll to generate static HTML from Markdown. 

### Setup

On MacOS, we want to install via Homebrew rather than relying on the default install.
```
brew install chruby ruby-install xz
```

We'll then install a Ruby version matching [the version used by Github Pages](https://pages.github.com/versions/):
```
ruby-install ruby 2.7.4
```

Then, assuming your shell is zshell:
```
echo "source $(brew --prefix)/opt/chruby/share/chruby/chruby.sh" >> ~/.zshrc
echo "source $(brew --prefix)/opt/chruby/share/chruby/auto.sh" >> ~/.zshrc
echo "chruby ruby-2.7.4" >> ~/.zshrc
```

Then open a new shell, and confirm that you've got the right Ruby version:
```
ruby -v # should be 2.7.4
```

(The steps above are [recommended by Jekyll](https://jekyllrb.com/docs/installation/macos/), but modified to reflect the environment provided by Github Pages.)

Now install Jekyll itself and start a development server:
```
cd docs
bundle install
bundle exec jekyll serve
```


### PRs and Reviews

All changes should be made through PRs, and PRs should have one approving review before merge.

Branch names should begin with the number of the issue addressed, followed by a brief description.
