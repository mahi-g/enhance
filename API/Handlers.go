package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path/filepath"
)

func setHeaders(w http.ResponseWriter, contentType string) {
	w.Header().Set("Content-Type", contentType)
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.WriteHeader(http.StatusOK)
}

func Home(w http.ResponseWriter, r *http.Request) {
	setHeaders(w, "application/json; charset=UTF-8")
	_, _ = fmt.Fprintln(w, "{\"Welcome\": \"To The Mock Api\"}")
}

func UserData(w http.ResponseWriter, r *http.Request) {
	setHeaders(w, "application/json; charset=UTF-8")
	vars := mux.Vars(r)
	userId := vars["userId"]
	_, _ = fmt.Fprintln(w, findData(userId, "Users"))
}

func findData(userId string, datatype string) string {
	var files []string
	var out = ""
	var isFirst = true
	root := "Data/" + datatype
	err := filepath.Walk(root, func(path string, info os.FileInfo, err error) error {
		files = append(files, path)
		return nil
	})
	if err != nil {
		panic(err)
	}
	for _, file := range files {
		if file == "Data\\Users\\"+userId+".json" {
			content, err := ioutil.ReadFile(file)

			if err != nil {
				log.Fatal(err)
			}

			if isFirst {
				out += string(content)
				isFirst = false
			} else {
				out += ", " + string(content)
			}
		}
	}

	return out
}
