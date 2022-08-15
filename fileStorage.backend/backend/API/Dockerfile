FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 7054

ENV ASPNETCORE_URLS=http://+:7054

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["fileStorage.backend/backend/API/API.csproj", "fileStorage.backend/backend/API/"]
RUN dotnet restore "fileStorage.backend\backend\API\API.csproj"
COPY . .
WORKDIR "/src/fileStorage.backend/backend/API"
RUN dotnet build "API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "API.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "API.dll"]
