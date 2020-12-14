SHELL=/bin/bash
VERSION=0.0.1
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
usage() {

        cat <<EOF
deploy.sh $VERSION
Usage: $0 [deploy-portal|-v|--help]
EOF
        exit 1
}

# args=("$@")
# ENV="${args[1]}"
# TASK="${args[0]}"

        #     echo $URI
case "$1" in
        --help|help) usage;;
        -v|version)
            echo "$VERSION"
        ;;
        deploy)
            FILE=$2
            ENV=$3
            URI="$DIR/$ENV/docker-compose/${FILE}.yml"
            echo $URI
            docker-compose -f "$URI" up --build --force-recreate -d
        ;;
        down)
            FILE=$2
            ENV=$3
            URI="$DIR/$ENV/docker-compose/${FILE}.yml"
            echo $URI
            docker-compose -f "$URI" down
        ;;
        *) usage;;
esac
