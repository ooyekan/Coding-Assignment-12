FROM node:lts-iron

WORKDIR /oyekan_oyebisi_ui_garden/

COPY public/ /oyekan_oyebisi_ui_garden/public
COPY src/ /oyekan_oyebisi_ui_garden/src
COPY package.json /oyekan_oyebisi_ui_garden/
COPY . /oyekan_oyebisi_ui_garden

RUN npm install

CMD ["npm", "run", "storybook"]
