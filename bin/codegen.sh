APPSYNC_APP_ID=tox6mk5hzre2dhzmekiemmfo7i
aws appsync get-introspection-schema --api-id ${APPSYNC_APP_ID} --format JSON schema.graphql.json
