FROM eclipse-temurin:21-jre
WORKDIR /app
COPY target/user-management-*.jar app.jar
ENTRYPOINT ["java","-jar","/app/app.jar"]
