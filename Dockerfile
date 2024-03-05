# Стадия сборки
FROM node:20 AS builder

WORKDIR /app

# Копирование файлов проекта
COPY package*.json ./

# Установка зависимостей
RUN npm install

# Копирование остальных файлов
COPY . ./

# Сборка приложения
RUN npm run build

# Стадия запуска
FROM node:20 AS runner

WORKDIR /app

COPY --from=builder /app/next.config.*js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Команда для запуска приложения
CMD ["npm", "run", "start"]