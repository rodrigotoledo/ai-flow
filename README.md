# ai-flow

`ai-flow` is a CLI tool designed to enhance Git Flow operations by automating branch naming and management using AI-driven name suggestions. It integrates with Git Flow to provide a smooth workflow for developers, enabling the start, management, and finish of features, releases, and hotfixes with names that are dynamically generated based on the descriptions provided.

## Features

- **Automated Branch Naming:** Utilizes AI to translate and generate meaningful branch names.
- **Git Flow Integration:** Seamlessly integrates with Git Flow, enhancing its branch management capabilities.
- **Multi-language Support:** Offers the ability to input descriptions in your native language, which are then translated to English for branch naming.

## Prerequisites

Before installing `ai-flow`, ensure that you have Git Flow installed on your system. If Git Flow is not already installed, you can install it by following these instructions:

### For macOS:

```bash
brew install git-flow
```

### For Ubuntu:

```bash
sudo apt-get install git-flow
```

### For other operating systems:

Please refer to the [Git Flow installation guide](https://github.com/nvie/gitflow/wiki/Installation).

## Installation

You can install `ai-flow` using npm. Run the following command:

```bash
npm install -g ai-flow
```

This will install ai-flow globally on your system, making it available from anywhere in your command line.

## Usage

To start using ai-flow, you need to have Git Flow initialized in your repository. Here’s how you can use ai-flow:

## Starting a New Feature

```bash
ai-flow feature start "description of your feature"
```

This command will translate "description of your feature" into English, generate a suitable branch name, and start a new feature with that name.

## Finishing a Feature

```bash
ai-flow feature finish
```

This command will finish the current feature branch that you are on, merging it back to the develop branch.

## Configuration

Before using ai-flow, you need to set your OpenAI API key for translation services:

```bash
ai-flow SET_KEY "your_openai_api_key_here"
```

Replace "your_openai_api_key_here" with your actual OpenAI API key.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

  1. Fork the Project
  2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
  3. Commit your Changes (git commit -m 'Add some AmazingFeature')
  4. Push to the Branch (git push origin feature/AmazingFeature)
  5. Open a Pull Request

## License

Distributed under the ISC License. See LICENSE for more information.

## Contact

Rodrigo Toledo – rodrigo@rtoledo.inf.br